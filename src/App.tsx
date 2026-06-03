import { useState } from 'react'
import { useCalendarStore } from './store'
import { THEMES } from './themes'
import { CalendarHeader } from './components/CalendarHeader'
import { CalendarGrid } from './components/CalendarGrid'
import { SettingsPanel } from './components/SettingsPanel'
import { EventDialog } from './components/EventDialog'
import { toDateStr } from './utils'

export default function App() {
  const { theme: themeName, currentYear, currentMonth } = useCalendarStore()
  const theme = THEMES[themeName]
  const [showAdd, setShowAdd] = useState(false)

  const today = new Date()
  const addDate = toDateStr(
    currentYear,
    currentMonth,
    today.getFullYear() === currentYear && today.getMonth() + 1 === currentMonth
      ? today.getDate()
      : 1
  )

  return (
    <div className={`h-dvh flex flex-col ${theme.bg} ${theme.text}`}>
      <CalendarHeader theme={theme} />

      <CalendarGrid theme={theme} />

      <SettingsPanel theme={theme} />

      {/* FAB: 予定追加 */}
      <button
        onClick={() => setShowAdd(true)}
        className="fixed bottom-20 right-4 z-30 w-14 h-14 rounded-full bg-blue-500 text-white text-3xl shadow-lg flex items-center justify-center active:bg-blue-600"
        aria-label="予定を追加"
      >
        ＋
      </button>

      {showAdd && (
        <EventDialog
          date={addDate}
          onClose={() => setShowAdd(false)}
          theme={theme}
        />
      )}
    </div>
  )
}
