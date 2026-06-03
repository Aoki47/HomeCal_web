import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type {
  CalEvent, MamaShift, OverrideEvent,
  RecurringSetting, ThemeName,
} from './types'
import { makeDefaultRecurringSetting } from './types'

interface CalendarState {
  currentYear: number
  currentMonth: number  // 1-12
  events: CalEvent[]
  mamaShifts: Record<string, MamaShift>  // key: YYYY-MM-DD
  jukuMomo: RecurringSetting
  jukuAsa: RecurringSetting
  jukuAoi: RecurringSetting
  swimmingAoi: RecurringSetting
  overrides: OverrideEvent[]
  theme: ThemeName

  // navigation
  goToPrevMonth: () => void
  goToNextMonth: () => void
  goToToday: () => void

  // mama shifts
  setMamaShift: (date: string, shift: MamaShift) => void

  // recurring
  setJukuMomo: (s: RecurringSetting) => void
  setJukuAsa: (s: RecurringSetting) => void
  setJukuAoi: (s: RecurringSetting) => void
  setSwimmingAoi: (s: RecurringSetting) => void

  // overrides
  addOverride: (o: OverrideEvent) => void
  removeOverride: (source: OverrideEvent['source'], date: string) => void

  // events
  addEvent: (e: CalEvent) => void
  updateEvent: (e: CalEvent) => void
  deleteEvent: (id: string) => void

  // theme
  setTheme: (t: ThemeName) => void
}

const now = new Date()

export const useCalendarStore = create<CalendarState>()(
  persist(
    (set) => ({
      currentYear: now.getFullYear(),
      currentMonth: now.getMonth() + 1,
      events: [],
      mamaShifts: {},
      jukuMomo: makeDefaultRecurringSetting(),
      jukuAsa: makeDefaultRecurringSetting(),
      jukuAoi: makeDefaultRecurringSetting(),
      swimmingAoi: makeDefaultRecurringSetting(),
      overrides: [],
      theme: 'light',

      goToPrevMonth: () =>
        set((s) => {
          const m = s.currentMonth - 1
          return m < 1
            ? { currentMonth: 12, currentYear: s.currentYear - 1 }
            : { currentMonth: m }
        }),

      goToNextMonth: () =>
        set((s) => {
          const m = s.currentMonth + 1
          return m > 12
            ? { currentMonth: 1, currentYear: s.currentYear + 1 }
            : { currentMonth: m }
        }),

      goToToday: () =>
        set(() => {
          const d = new Date()
          return { currentYear: d.getFullYear(), currentMonth: d.getMonth() + 1 }
        }),

      setMamaShift: (date, shift) =>
        set((s) => ({ mamaShifts: { ...s.mamaShifts, [date]: shift } })),

      setJukuMomo: (setting) => set({ jukuMomo: setting }),
      setJukuAsa: (setting) => set({ jukuAsa: setting }),
      setJukuAoi: (setting) => set({ jukuAoi: setting }),
      setSwimmingAoi: (setting) => set({ swimmingAoi: setting }),

      addOverride: (o) =>
        set((s) => ({ overrides: [...s.overrides.filter(
          (x) => !(x.source === o.source && x.date === o.date)
        ), o] })),

      removeOverride: (source, date) =>
        set((s) => ({
          overrides: s.overrides.filter(
            (x) => !(x.source === source && x.date === date)
          ),
        })),

      addEvent: (e) => set((s) => ({ events: [...s.events, e] })),

      updateEvent: (e) =>
        set((s) => ({ events: s.events.map((x) => (x.id === e.id ? e : x)) })),

      deleteEvent: (id) =>
        set((s) => ({ events: s.events.filter((x) => x.id !== id) })),

      setTheme: (t) => set({ theme: t }),
    }),
    { name: 'homecal-storage' }
  )
)
