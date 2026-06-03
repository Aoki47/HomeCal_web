import { useCalendarStore } from '../store'
import type { ThemeTokens } from '../themes'
import { DayRow } from './DayRow'
import { getDaysInMonth } from '../utils'

interface Props {
  theme: ThemeTokens
}

const COLUMNS = ['パパ', 'ママ', 'もも', '朝', '碧']

export function CalendarGrid({ theme }: Props) {
  const { currentYear, currentMonth } = useCalendarStore()
  const days = getDaysInMonth(currentYear, currentMonth)

  return (
    <div className="flex-1 overflow-y-auto">
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
        />
      ))}
    </div>
  )
}
