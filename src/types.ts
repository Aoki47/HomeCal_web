export type Member = 'papa' | 'mama' | 'momo' | 'asa' | 'aoi'

export const MEMBERS: Member[] = ['papa', 'mama', 'momo', 'asa', 'aoi']

export const MEMBER_LABELS: Record<Member, string> = {
  papa: 'パパ',
  mama: 'ママ',
  momo: 'もも',
  asa: '朝',
  aoi: '碧',
}

export type MamaShift = '日' | '準' | '深' | '◯'

export const MAMA_SHIFTS: MamaShift[] = ['日', '準', '深', '◯']

export const MAMA_SHIFT_COLORS: Record<MamaShift, string> = {
  '日': 'shift-day',
  '準': 'shift-semi',
  '深': 'shift-night',
  '◯': 'shift-off',
}

export type EventColor =
  | 'red' | 'orange' | 'yellow' | 'green'
  | 'blue' | 'purple' | 'pink' | 'gray'

export const EVENT_COLORS: EventColor[] = [
  'red', 'orange', 'yellow', 'green',
  'blue', 'purple', 'pink', 'gray',
]

export const EVENT_COLOR_LABELS: Record<EventColor, string> = {
  red: '赤', orange: '橙', yellow: '黄', green: '緑',
  blue: '青', purple: '紫', pink: 'ピンク', gray: 'グレー',
}

export const EVENT_COLOR_CLASSES: Record<EventColor, string> = {
  red: 'bg-red-100 text-red-800 border-red-300',
  orange: 'bg-orange-100 text-orange-800 border-orange-300',
  yellow: 'bg-yellow-100 text-yellow-800 border-yellow-300',
  green: 'bg-green-100 text-green-800 border-green-300',
  blue: 'bg-blue-100 text-blue-800 border-blue-300',
  purple: 'bg-purple-100 text-purple-800 border-purple-300',
  pink: 'bg-pink-100 text-pink-800 border-pink-300',
  gray: 'bg-gray-100 text-gray-800 border-gray-300',
}

export interface CalEvent {
  id: string
  title: string
  members: Member[]
  date: string       // YYYY-MM-DD
  startTime?: string // HH:MM
  endTime?: string   // HH:MM
  color: EventColor
  note?: string
}

export interface DaySetting {
  enabled: boolean
  startTime: string  // HH:MM
  endTime: string    // HH:MM
}

export interface RecurringSetting {
  days: { [dayIndex: number]: DaySetting }  // 0=日, 1=月, ..., 6=土
  enabled: boolean
}

export interface OverrideEvent {
  source: 'juku_momo' | 'juku_asa' | 'juku_aoi' | 'swimming_aoi'
  date: string       // YYYY-MM-DD
  action: 'delete' | 'modify'
  startTime?: string
  endTime?: string
}

export type ThemeName = 'light' | 'dark' | 'natural' | 'pastel'

export const THEME_LABELS: Record<ThemeName, string> = {
  light: 'ライト',
  dark: 'ダーク',
  natural: 'ナチュラル',
  pastel: 'パステル',
}

export const DAYS_OF_WEEK = ['日', '月', '火', '水', '木', '金', '土']

export function makeDefaultRecurringSetting(): RecurringSetting {
  return {
    enabled: true,
    days: Object.fromEntries(
      [0, 1, 2, 3, 4, 5, 6].map((d) => [
        d,
        { enabled: false, startTime: '17:00', endTime: '19:00' },
      ])
    ),
  }
}
