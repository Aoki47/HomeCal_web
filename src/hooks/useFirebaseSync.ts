import { useEffect } from 'react'
import { ref, onValue, set as fbSet } from 'firebase/database'
import { db, isFirebaseConfigured } from '../firebase'
import { useCalendarStore } from '../store'
import type { CalEvent, MamaShift, OverrideEvent } from '../types'
import { makeDefaultRecurringSetting } from '../types'

const LS_DATA = 'homecal-storage'

// Migrate existing localStorage data to Firebase (runs once)
function migrateIfNeeded() {
  const migrated = localStorage.getItem('homecal-migrated-to-firebase')
  if (migrated) return

  try {
    const raw = localStorage.getItem(LS_DATA)
    if (!raw || !db) return
    const state = JSON.parse(raw).state ?? {}

    // Upload events
    const events: CalEvent[] = state.events ?? []
    events.forEach((e) => {
      fbSet(ref(db!, `events/${e.id}`), e)
    })
    // Upload mama shifts
    const shifts: Record<string, MamaShift> = state.mamaShifts ?? {}
    Object.entries(shifts).forEach(([date, shift]) => {
      fbSet(ref(db!, `mamaShifts/${date}`), shift)
    })
    // Upload settings
    if (state.jukuMomo)    fbSet(ref(db!, 'settings/jukuMomo'),    state.jukuMomo)
    if (state.jukuAsa)     fbSet(ref(db!, 'settings/jukuAsa'),     state.jukuAsa)
    if (state.jukuAoi)     fbSet(ref(db!, 'settings/jukuAoi'),     state.jukuAoi)
    if (state.swimmingAoi) fbSet(ref(db!, 'settings/swimmingAoi'), state.swimmingAoi)
    // Upload overrides
    const overrides: OverrideEvent[] = state.overrides ?? []
    overrides.forEach((o) => {
      fbSet(ref(db!, `overrides/${o.source}_${o.date}`), o)
    })

    localStorage.setItem('homecal-migrated-to-firebase', '1')
    console.log('[HomeCal] Migrated localStorage data to Firebase')
  } catch (e) {
    console.error('[HomeCal] Migration error:', e)
  }
}

export function useFirebaseSync() {
  const _applyShared = useCalendarStore((s) => s._applyShared)

  useEffect(() => {
    if (!isFirebaseConfigured || !db) return

    // Migrate old local data once
    migrateIfNeeded()

    // Subscribe to entire DB root
    const rootRef = ref(db, '/')
    const unsubscribe = onValue(rootRef, (snapshot) => {
      const data = snapshot.val() ?? {}

      const eventsMap: Record<string, CalEvent> = data.events ?? {}
      const overridesMap: Record<string, OverrideEvent> = data.overrides ?? {}
      const settings = data.settings ?? {}

      _applyShared({
        events:      Object.values(eventsMap),
        mamaShifts:  data.mamaShifts ?? {},
        jukuMomo:    settings.jukuMomo    ?? makeDefaultRecurringSetting(),
        jukuAsa:     settings.jukuAsa     ?? makeDefaultRecurringSetting(),
        jukuAoi:     settings.jukuAoi     ?? makeDefaultRecurringSetting(),
        swimmingAoi: settings.swimmingAoi ?? makeDefaultRecurringSetting(),
        overrides:   Object.values(overridesMap),
      })
    })

    return () => unsubscribe()
  }, [_applyShared])
}
