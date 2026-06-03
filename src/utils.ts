import type { OverrideEvent, RecurringSetting } from './types'

export function toDateStr(year: number, month: number, day: number): string {
  return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`
}

export function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month, 0).getDate()
}

export function getDayOfWeek(year: number, month: number, day: number): number {
  return new Date(year, month - 1, day).getDay()
}

export function isToday(year: number, month: number, day: number): boolean {
  const t = new Date()
  return (
    t.getFullYear() === year &&
    t.getMonth() + 1 === month &&
    t.getDate() === day
  )
}

export interface RecurringSlot {
  startTime: string
  endTime: string
}

export function getRecurringSlot(
  setting: RecurringSetting,
  dayOfWeek: number,
  dateStr: string,
  source: OverrideEvent['source'],
  overrides: OverrideEvent[]
): RecurringSlot | null {
  const override = overrides.find(
    (o) => o.source === source && o.date === dateStr
  )
  if (override?.action === 'delete') return null

  const daySetting = setting.days[dayOfWeek]
  if (!daySetting?.enabled) return null

  if (override?.action === 'modify' && override.startTime && override.endTime) {
    return { startTime: override.startTime, endTime: override.endTime }
  }

  return { startTime: daySetting.startTime, endTime: daySetting.endTime }
}

export function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`
}
