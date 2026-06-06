import { useRef } from 'react'
import { useCalendarStore } from './store'
import { THEMES } from './themes'
import { isFirebaseConfigured } from './firebase'
import { useFirebaseSync } from './hooks/useFirebaseSync'
import { CalendarHeader } from './components/CalendarHeader'
import { CalendarGrid } from './components/CalendarGrid'
import { SettingsPanel } from './components/SettingsPanel'

export default function App() {
  const { theme: themeName, loaded } = useCalendarStore()
  const theme = THEMES[themeName]
  const scrollToTodayRef = useRef<() => void>(() => {})

  useFirebaseSync()

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
      <CalendarHeader theme={theme} onScrollToToday={() => scrollToTodayRef.current()} />

      {isFirebaseConfigured && (
        <div className="px-3 py-0.5 text-[10px] text-green-600 bg-green-50 text-center">
          ☁ クラウド同期中
        </div>
      )}

      <CalendarGrid theme={theme} scrollToTodayRef={scrollToTodayRef} />

      <SettingsPanel theme={theme} />
    </div>
  )
}
