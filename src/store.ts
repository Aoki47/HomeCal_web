import { create } from 'zustand'
import { ref, set as fbSet, remove as fbRemove } from 'firebase/database'
import { db, isFirebaseConfigured } from './firebase'
import type {
  CalEvent, MamaShift, OverrideEvent,
  RecurringSetting, ThemeName,
} from './types'
import { makeDefaultRecurringSetting } from './types'

// ── Firebase write helpers ──────────────────────────────────────────
function write(path: string, value: unknown) {
  if (db) fbSet(ref(db, path), value)
}
function erase(path: string) {
  if (db) fbRemove(ref(db, path))
}

// ── localStorage (UI-only state & fallback) ──────────────────────────
const LS_UI  = 'homecal-ui'       // theme, year, month
const LS_DATA = 'homecal-storage' // fallback when Firebase not configured

function loadUi() {
  try { return JSON.parse(localStorage.getItem(LS_UI) ?? '{}') } catch { return {} }
}
function saveUi(patch: Record<string, unknown>) {
  try {
    const cur = loadUi()
    localStorage.setItem(LS_UI, JSON.stringify({ ...cur, ...patch }))
  } catch { /* ignore */ }
}

// Load shared data from old localStorage (migration source)
function loadLegacyShared() {
  try {
    const raw = localStorage.getItem(LS_DATA)
    return raw ? (JSON.parse(raw).state ?? {}) : {}
  } catch { return {} }
}

function saveShared(patch: Partial<SharedState>) {
  if (isFirebaseConfigured) return // Firebase handles it
  try {
    const cur = loadLegacyShared()
    localStorage.setItem(LS_DATA, JSON.stringify({ state: { ...cur, ...patch } }))
  } catch { /* ignore */ }
}

// ── Types ────────────────────────────────────────────────────────────
interface SharedState {
  events: CalEvent[]
  mamaShifts: Record<string, MamaShift>
  jukuMomo: RecurringSetting
  jukuAsa: RecurringSetting
  jukuAoi: RecurringSetting
  swimmingAoi: RecurringSetting
  overrides: OverrideEvent[]
}

interface CalendarState extends SharedState {
  currentYear: number
  currentMonth: number
  theme: ThemeName
  loaded: boolean   // true once Firebase (or localStorage) data is ready

  // sync (called by useFirebaseSync)
  _applyShared: (data: Partial<SharedState>) => void

  goToPrevMonth: () => void
  goToNextMonth: () => void
  goToToday: () => void

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

  setTheme: (t: ThemeName) => void
}

// ── Initial state ─────────────────────────────────────────────────────
const now  = new Date()
const ui   = loadUi()
const legacy = isFirebaseConfigured ? {} : loadLegacyShared()

const defaultShared: SharedState = {
  events:      [],
  mamaShifts:  {},
  jukuMomo:    makeDefaultRecurringSetting(),
  jukuAsa:     makeDefaultRecurringSetting(),
  jukuAoi:     makeDefaultRecurringSetting(),
  swimmingAoi: makeDefaultRecurringSetting(),
  overrides:   [],
}

// ── Store ─────────────────────────────────────────────────────────────
export const useCalendarStore = create<CalendarState>()((set) => ({
  // UI state (per-device)
  currentYear:  ui.currentYear  ?? now.getFullYear(),
  currentMonth: ui.currentMonth ?? now.getMonth() + 1,
  theme:        ui.theme        ?? 'light',
  loaded: !isFirebaseConfigured, // local-only mode: already "loaded"

  // Shared state (Firebase or legacy localStorage)
  events:      legacy.events      ?? defaultShared.events,
  mamaShifts:  legacy.mamaShifts  ?? defaultShared.mamaShifts,
  jukuMomo:    legacy.jukuMomo    ?? defaultShared.jukuMomo,
  jukuAsa:     legacy.jukuAsa     ?? defaultShared.jukuAsa,
  jukuAoi:     legacy.jukuAoi     ?? defaultShared.jukuAoi,
  swimmingAoi: legacy.swimmingAoi ?? defaultShared.swimmingAoi,
  overrides:   legacy.overrides   ?? defaultShared.overrides,

  // Called by useFirebaseSync when Firebase data arrives
  _applyShared: (data) =>
    set((s) => ({ ...s, ...data, loaded: true })),

  // Navigation
  goToPrevMonth: () =>
    set((s) => {
      const m = s.currentMonth - 1
      const patch = m < 1
        ? { currentMonth: 12, currentYear: s.currentYear - 1 }
        : { currentMonth: m }
      saveUi(patch)
      return patch
    }),

  goToNextMonth: () =>
    set((s) => {
      const m = s.currentMonth + 1
      const patch = m > 12
        ? { currentMonth: 1, currentYear: s.currentYear + 1 }
        : { currentMonth: m }
      saveUi(patch)
      return patch
    }),

  goToToday: () =>
    set(() => {
      const d = new Date()
      const patch = { currentYear: d.getFullYear(), currentMonth: d.getMonth() + 1 }
      saveUi(patch)
      return patch
    }),

  // Mama shifts
  setMamaShift: (date, shift) => {
    set((s) => {
      const next = { ...s.mamaShifts, [date]: shift }
      write(`mamaShifts/${date}`, shift)
      saveShared({ mamaShifts: next })
      return { mamaShifts: next }
    })
  },

  // Recurring settings
  setJukuMomo: (setting) => {
    set(() => { write('settings/jukuMomo', setting); saveShared({ jukuMomo: setting }); return { jukuMomo: setting } })
  },
  setJukuAsa: (setting) => {
    set(() => { write('settings/jukuAsa', setting); saveShared({ jukuAsa: setting }); return { jukuAsa: setting } })
  },
  setJukuAoi: (setting) => {
    set(() => { write('settings/jukuAoi', setting); saveShared({ jukuAoi: setting }); return { jukuAoi: setting } })
  },
  setSwimmingAoi: (setting) => {
    set(() => { write('settings/swimmingAoi', setting); saveShared({ swimmingAoi: setting }); return { swimmingAoi: setting } })
  },

  // Overrides
  addOverride: (o) => {
    set((s) => {
      const next = [
        ...s.overrides.filter((x) => !(x.source === o.source && x.date === o.date)),
        o,
      ]
      write(`overrides/${o.source}_${o.date}`, o)
      saveShared({ overrides: next })
      return { overrides: next }
    })
  },
  removeOverride: (source, date) => {
    set((s) => {
      const next = s.overrides.filter((x) => !(x.source === source && x.date === date))
      erase(`overrides/${source}_${date}`)
      saveShared({ overrides: next })
      return { overrides: next }
    })
  },

  // Events
  addEvent: (e) => {
    set((s) => {
      const next = [...s.events, e]
      write(`events/${e.id}`, e)
      saveShared({ events: next })
      return { events: next }
    })
  },
  updateEvent: (e) => {
    set((s) => {
      const next = s.events.map((x) => (x.id === e.id ? e : x))
      write(`events/${e.id}`, e)
      saveShared({ events: next })
      return { events: next }
    })
  },
  deleteEvent: (id) => {
    set((s) => {
      const next = s.events.filter((x) => x.id !== id)
      erase(`events/${id}`)
      saveShared({ events: next })
      return { events: next }
    })
  },

  // Theme (local only)
  setTheme: (t) => {
    set(() => { saveUi({ theme: t }); return { theme: t } })
  },
}))
