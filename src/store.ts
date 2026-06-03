import { create } from 'zustand'
import { ref, set as fbSet, remove as fbRemove } from 'firebase/database'
import { db, isFirebaseConfigured } from './firebase'
import type {
  CalEvent, MamaShift, OverrideEvent,
  RecurringSetting, ThemeName,
} from './types'
import { makeDefaultRecurringSetting } from './types'

// ── Firebase helpers ───────────────────────────────────────────────────
function fbWrite(path: string, value: unknown) {
  if (!db) return
  // Firebase rejects undefined values — strip them via JSON round-trip
  const clean = JSON.parse(JSON.stringify(value))
  fbSet(ref(db, path), clean).catch((e) =>
    console.error('[HomeCal] write error:', path, e)
  )
}
function fbErase(path: string) {
  if (!db) return
  fbRemove(ref(db, path)).catch((e) =>
    console.error('[HomeCal] remove error:', path, e)
  )
}

// ── localStorage helpers ───────────────────────────────────────────────
const LS_UI  = 'homecal-ui'
const LS_DATA = 'homecal-data'

function loadUi(): Partial<{ currentYear: number; currentMonth: number; theme: ThemeName }> {
  try { return JSON.parse(localStorage.getItem(LS_UI) ?? '{}') } catch { return {} }
}
function saveUi(patch: Record<string, unknown>) {
  try { localStorage.setItem(LS_UI, JSON.stringify({ ...loadUi(), ...patch })) } catch { /* */ }
}
function loadLocalData(): Partial<SharedState> {
  try { return JSON.parse(localStorage.getItem(LS_DATA) ?? '{}') } catch { return {} }
}
function saveLocal(patch: Partial<SharedState>) {
  if (isFirebaseConfigured) return
  try { localStorage.setItem(LS_DATA, JSON.stringify({ ...loadLocalData(), ...patch })) } catch { /* */ }
}

// ── Types ──────────────────────────────────────────────────────────────
interface SharedState {
  events:      CalEvent[]
  mamaShifts:  Record<string, MamaShift>
  jukuMomo:    RecurringSetting
  jukuAsa:     RecurringSetting
  jukuAoi:     RecurringSetting
  swimmingAoi: RecurringSetting
  overrides:   OverrideEvent[]
}

interface CalendarState extends SharedState {
  currentYear:  number
  currentMonth: number
  theme:        ThemeName
  loaded:       boolean

  _applyShared:   (data: Partial<SharedState>) => void
  goToPrevMonth:  () => void
  goToNextMonth:  () => void
  goToToday:      () => void
  setMamaShift:   (date: string, shift: MamaShift) => void
  setJukuMomo:    (s: RecurringSetting) => void
  setJukuAsa:     (s: RecurringSetting) => void
  setJukuAoi:     (s: RecurringSetting) => void
  setSwimmingAoi: (s: RecurringSetting) => void
  addOverride:    (o: OverrideEvent) => void
  removeOverride: (source: OverrideEvent['source'], date: string) => void
  addEvent:    (e: CalEvent) => void
  updateEvent: (e: CalEvent) => void
  deleteEvent: (id: string) => void
  setTheme:    (t: ThemeName) => void
}

// ── Initial values ─────────────────────────────────────────────────────
const now   = new Date()
const ui    = loadUi()
const local = isFirebaseConfigured ? ({} as Partial<SharedState>) : loadLocalData()

const defaults: SharedState = {
  events: [], mamaShifts: {},
  jukuMomo: makeDefaultRecurringSetting(),
  jukuAsa:  makeDefaultRecurringSetting(),
  jukuAoi:  makeDefaultRecurringSetting(),
  swimmingAoi: makeDefaultRecurringSetting(),
  overrides: [],
}

// ── Store ──────────────────────────────────────────────────────────────
export const useCalendarStore = create<CalendarState>()((set) => ({
  currentYear:  ui.currentYear  ?? now.getFullYear(),
  currentMonth: ui.currentMonth ?? now.getMonth() + 1,
  theme:        ui.theme        ?? 'light',
  loaded: !isFirebaseConfigured,

  events:      local.events      ?? defaults.events,
  mamaShifts:  local.mamaShifts  ?? defaults.mamaShifts,
  jukuMomo:    local.jukuMomo    ?? defaults.jukuMomo,
  jukuAsa:     local.jukuAsa     ?? defaults.jukuAsa,
  jukuAoi:     local.jukuAoi     ?? defaults.jukuAoi,
  swimmingAoi: local.swimmingAoi ?? defaults.swimmingAoi,
  overrides:   local.overrides   ?? defaults.overrides,

  // Firebase sync (called by useFirebaseSync hook only)
  _applyShared: (data) => set({ ...data, loaded: true }),

  // Navigation
  goToPrevMonth: () => set((s) => {
    const m = s.currentMonth - 1
    const p = m < 1 ? { currentMonth: 12, currentYear: s.currentYear - 1 } : { currentMonth: m }
    saveUi(p); return p
  }),
  goToNextMonth: () => set((s) => {
    const m = s.currentMonth + 1
    const p = m > 12 ? { currentMonth: 1, currentYear: s.currentYear + 1 } : { currentMonth: m }
    saveUi(p); return p
  }),
  goToToday: () => set(() => {
    const d = new Date()
    const p = { currentYear: d.getFullYear(), currentMonth: d.getMonth() + 1 }
    saveUi(p); return p
  }),

  // Mama shifts
  setMamaShift: (date, shift) => {
    let next: Record<string, MamaShift> = {}
    set((s) => { next = { ...s.mamaShifts, [date]: shift }; return { mamaShifts: next } })
    fbWrite(`mamaShifts/${date}`, shift)
    saveLocal({ mamaShifts: next })
  },

  // Recurring settings
  setJukuMomo: (s) => { set({ jukuMomo: s }); fbWrite('settings/jukuMomo', s); saveLocal({ jukuMomo: s }) },
  setJukuAsa:  (s) => { set({ jukuAsa:  s }); fbWrite('settings/jukuAsa',  s); saveLocal({ jukuAsa:  s }) },
  setJukuAoi:  (s) => { set({ jukuAoi:  s }); fbWrite('settings/jukuAoi',  s); saveLocal({ jukuAoi:  s }) },
  setSwimmingAoi: (s) => {
    set({ swimmingAoi: s })
    fbWrite('settings/swimmingAoi', s)
    saveLocal({ swimmingAoi: s })
  },

  // Overrides
  addOverride: (o) => {
    let next: OverrideEvent[] = []
    set((s) => {
      next = [...s.overrides.filter((x) => !(x.source === o.source && x.date === o.date)), o]
      return { overrides: next }
    })
    fbWrite(`overrides/${o.source}_${o.date}`, o)
    saveLocal({ overrides: next })
  },
  removeOverride: (source, date) => {
    let next: OverrideEvent[] = []
    set((s) => { next = s.overrides.filter((x) => !(x.source === source && x.date === date)); return { overrides: next } })
    fbErase(`overrides/${source}_${date}`)
    saveLocal({ overrides: next })
  },

  // Events
  addEvent: (e) => {
    let next: CalEvent[] = []
    set((s) => { next = [...s.events, e]; return { events: next } })
    fbWrite(`events/${e.id}`, e)
    saveLocal({ events: next })
  },
  updateEvent: (e) => {
    let next: CalEvent[] = []
    set((s) => { next = s.events.map((x) => (x.id === e.id ? e : x)); return { events: next } })
    fbWrite(`events/${e.id}`, e)
    saveLocal({ events: next })
  },
  deleteEvent: (id) => {
    let next: CalEvent[] = []
    set((s) => { next = s.events.filter((x) => x.id !== id); return { events: next } })
    fbErase(`events/${id}`)
    saveLocal({ events: next })
  },

  // Theme (local only)
  setTheme: (t) => { set({ theme: t }); saveUi({ theme: t }) },
}))
