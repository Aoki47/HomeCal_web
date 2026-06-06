import { useState, useRef, useCallback } from 'react'
import { useCalendarStore } from '../store'
import type { ThemeTokens } from '../themes'
import { DayRow } from './DayRow'
import { DayDetailPanel } from './DayDetailPanel'
import { getDaysInMonth } from '../utils'

interface Props {
  theme: ThemeTokens
  scrollToTodayRef: React.MutableRefObject<() => void>
}

const COLUMNS = ['パパ', 'ママ', 'もも', '朝', '碧']

export function CalendarGrid({ theme, scrollToTodayRef }: Props) {
  const { currentYear, currentMonth } = useCalendarStore()
  const days = getDaysInMonth(currentYear, currentMonth)
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  // 今日へスクロール（CalendarHeader から呼ばれる）
  scrollToTodayRef.current = useCallback(() => {
    const el = scrollRef.current?.querySelector('[data-today="true"]')
    el?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, [])

  const handleDateClick = (date: string) => {
    setSelectedDate((prev) => (prev === date ? null : date))
  }

  return (
    <div className="flex flex-col flex-1 min-h-0">
      {/* スクロール可能なグリッドエリア */}
      <div className="flex-1 overflow-y-auto" ref={scrollRef}>
        {/* 列ヘッダー */}
        <div
          className={`sticky top-0 z-10 grid border-b-2 ${theme.border} ${theme.header} ${theme.headerText}`}
          style={{ gridTemplateColumns: '2.5rem repeat(5, 1fr)' }}
        >
          <div className="py-1" />
          {COLUMNS.map((label) => (
            <div
              key={label}
              className="text-center py-1 text-xs font-bold border-r last:border-r-0 border-white/20"
            >
              {label}
            </div>
          ))}
        </div>

        {/* 日付行 */}
        {Array.from({ length: days }, (_, i) => i + 1).map((day) => (
          <DayRow
            key={day}
            year={currentYear}
            month={currentMonth}
            day={day}
            theme={theme}
            onDateClick={handleDateClick}
          />
        ))}
      </div>

      {/* 日別詳細パネル */}
      {selectedDate && (
        <DayDetailPanel
          date={selectedDate}
          onClose={() => setSelectedDate(null)}
          theme={theme}
        />
      )}
    </div>
  )
}
