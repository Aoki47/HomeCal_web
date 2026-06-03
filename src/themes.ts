import type { ThemeName } from './types'

export interface ThemeTokens {
  bg: string
  surface: string
  border: string
  text: string
  textMuted: string
  header: string
  headerText: string
  today: string
  weekend: string
  shiftDay: string
  shiftSemi: string
  shiftNight: string
  shiftOff: string
  recurringBg: string
}

export const THEMES: Record<ThemeName, ThemeTokens> = {
  light: {
    bg: 'bg-gray-50',
    surface: 'bg-white',
    border: 'border-gray-200',
    text: 'text-gray-900',
    textMuted: 'text-gray-500',
    header: 'bg-blue-600',
    headerText: 'text-white',
    today: 'bg-blue-50 border-blue-400',
    weekend: 'bg-red-50',
    shiftDay: 'bg-blue-100 text-blue-800',
    shiftSemi: 'bg-orange-100 text-orange-800',
    shiftNight: 'bg-purple-100 text-purple-800',
    shiftOff: 'bg-green-100 text-green-800',
    recurringBg: 'bg-indigo-50 text-indigo-600',
  },
  dark: {
    bg: 'bg-gray-900',
    surface: 'bg-gray-800',
    border: 'border-gray-700',
    text: 'text-gray-100',
    textMuted: 'text-gray-400',
    header: 'bg-gray-800',
    headerText: 'text-gray-100',
    today: 'bg-blue-900 border-blue-500',
    weekend: 'bg-red-950',
    shiftDay: 'bg-blue-900 text-blue-200',
    shiftSemi: 'bg-orange-900 text-orange-200',
    shiftNight: 'bg-purple-900 text-purple-200',
    shiftOff: 'bg-green-900 text-green-200',
    recurringBg: 'bg-indigo-900 text-indigo-300',
  },
  natural: {
    bg: 'bg-amber-50',
    surface: 'bg-stone-100',
    border: 'border-stone-300',
    text: 'text-stone-800',
    textMuted: 'text-stone-500',
    header: 'bg-stone-600',
    headerText: 'text-amber-50',
    today: 'bg-amber-100 border-amber-500',
    weekend: 'bg-orange-50',
    shiftDay: 'bg-sky-100 text-sky-800',
    shiftSemi: 'bg-amber-100 text-amber-800',
    shiftNight: 'bg-violet-100 text-violet-800',
    shiftOff: 'bg-lime-100 text-lime-800',
    recurringBg: 'bg-teal-50 text-teal-700',
  },
  pastel: {
    bg: 'bg-pink-50',
    surface: 'bg-white',
    border: 'border-pink-200',
    text: 'text-gray-800',
    textMuted: 'text-gray-500',
    header: 'bg-pink-400',
    headerText: 'text-white',
    today: 'bg-yellow-100 border-yellow-400',
    weekend: 'bg-rose-50',
    shiftDay: 'bg-sky-100 text-sky-700',
    shiftSemi: 'bg-orange-100 text-orange-600',
    shiftNight: 'bg-purple-100 text-purple-600',
    shiftOff: 'bg-emerald-100 text-green-600',
    recurringBg: 'bg-violet-50 text-violet-600',
  },
}
