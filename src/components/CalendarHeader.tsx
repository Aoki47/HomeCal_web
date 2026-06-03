import { useState } from 'react'
import { useCalendarStore } from '../store'
import { THEME_LABELS, type ThemeName } from '../types'
import type { ThemeTokens } from '../themes'

interface Props {
  theme: ThemeTokens
}

export function CalendarHeader({ theme }: Props) {
  const { currentYear, currentMonth, goToPrevMonth, goToNextMonth, goToToday, setTheme } =
    useCalendarStore()
  const [showThemePicker, setShowThemePicker] = useState(false)

  return (
    <header className={`${theme.header} ${theme.headerText} sticky top-0 z-20 shadow`}>
      <div className="flex items-center justify-between px-3 py-2">
        <button
          onClick={goToPrevMonth}
          className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-white/20 active:bg-white/30 text-lg font-bold"
          aria-label="前月"
        >
          ‹
        </button>

        <button
          onClick={goToToday}
          className="text-base font-semibold tracking-wide"
        >
          {currentYear}年{currentMonth}月
        </button>

        <div className="flex items-center gap-1">
          <button
            onClick={() => setShowThemePicker((v) => !v)}
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-white/20 active:bg-white/30 text-lg"
            aria-label="テーマ"
          >
            🎨
          </button>
          <button
            onClick={goToNextMonth}
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-white/20 active:bg-white/30 text-lg font-bold"
            aria-label="翌月"
          >
            ›
          </button>
        </div>
      </div>

      {showThemePicker && (
        <div className={`absolute right-2 top-12 z-30 ${theme.surface} ${theme.border} border rounded-lg shadow-lg p-2 flex flex-col gap-1`}>
          {(Object.keys(THEME_LABELS) as ThemeName[]).map((t) => (
            <button
              key={t}
              onClick={() => { setTheme(t); setShowThemePicker(false) }}
              className={`px-4 py-2 rounded text-sm text-left ${theme.text} hover:opacity-80`}
            >
              {THEME_LABELS[t]}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}
