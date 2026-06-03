import { useState } from 'react'
import { useCalendarStore } from './store'
import { THEMES } from './themes'
import { isFirebaseConfigured } from './firebase'
import { useFirebaseSync } from './hooks/useFirebaseSync'
import { CalendarHeader } from './components/CalendarHeader'
import { CalendarGrid } from './components/CalendarGrid'
import { SettingsPanel } from './components/SettingsPanel'
import { EventDialog } from './components/EventDialog'
import { toDateStr } from './utils'

export default function App() {
  const { theme: themeName, currentYear, currentMonth, loaded } = useCalendarStore()
  const theme = THEMES[themeName]
  const [showAdd, setShowAdd] = useState(false)

  useFirebaseSync()

  const today = new Date()
  const addDate = toDateStr(
    currentYear,
    currentMonth,
    today.getFullYear() === currentYear && today.getMonth() + 1 === currentMonth
      ? today.getDate()
      : 1
  )

  if (!loaded) {
    return (
      <div className={`h-dvh flex flex-col items-center justify-center gap-3 ${theme.bg}`}>
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-sm text-gray-500">データを同期中…</p>
      </div>
    )
  }

  return (
    <div className={`h-dvh flex flex-col ${theme.bg} ${theme.text}`}>
      <CalendarHeader theme={theme} />

      {isFirebaseConfigured && (
        <div className="px-3 py-0.5 text-[10px] text-green-600 bg-green-50 text-center">
          ☁ クラウド同期中
        </div>
      )}

      <CalendarGrid theme={theme} />

      <SettingsPanel theme={theme} />

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
