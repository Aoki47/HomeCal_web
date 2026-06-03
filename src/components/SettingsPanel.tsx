import { useState } from 'react'
import { useCalendarStore } from '../store'
import type { RecurringSetting } from '../types'
import { DAYS_OF_WEEK } from '../types'
import type { ThemeTokens } from '../themes'

interface Props {
  theme: ThemeTokens
}

interface RecurringFormProps {
  label: string
  setting: RecurringSetting
  onChange: (s: RecurringSetting) => void
  theme: ThemeTokens
}

function RecurringForm({ label, setting, onChange, theme }: RecurringFormProps) {
  const toggleDay = (dayIndex: number) => {
    const prev = setting.days[dayIndex] ?? { enabled: false, startTime: '17:00', endTime: '19:00' }
    onChange({
      ...setting,
      days: {
        ...setting.days,
        [dayIndex]: { ...prev, enabled: !prev.enabled },
      },
    })
  }

  const setTime = (dayIndex: number, field: 'startTime' | 'endTime', value: string) => {
    const prev = setting.days[dayIndex] ?? { enabled: false, startTime: '17:00', endTime: '19:00' }
    onChange({
      ...setting,
      days: {
        ...setting.days,
        [dayIndex]: { ...prev, [field]: value },
      },
    })
  }

  return (
    <div className={`rounded-xl border ${theme.border} ${theme.surface} p-3 mb-3`}>
      <p className={`font-semibold text-sm mb-2 ${theme.text}`}>{label}</p>
      <div className="flex flex-col gap-1">
        {DAYS_OF_WEEK.map((dayLabel, i) => {
          const ds = setting.days[i] ?? { enabled: false, startTime: '17:00', endTime: '19:00' }
          return (
            <div key={i} className="flex items-center gap-2">
              {/* 曜日チェックボックス */}
              <label className="flex items-center gap-1 w-10 shrink-0 cursor-pointer">
                <input
                  type="checkbox"
                  checked={ds.enabled}
                  onChange={() => toggleDay(i)}
                  className="w-4 h-4 accent-blue-500"
                />
                <span className={`text-sm ${i === 0 ? 'text-red-500' : i === 6 ? 'text-blue-500' : theme.text}`}>
                  {dayLabel}
                </span>
              </label>

              {/* 時刻入力 */}
              <input
                type="time"
                value={ds.startTime}
                onChange={(e) => setTime(i, 'startTime', e.target.value)}
                disabled={!ds.enabled}
                className={`flex-1 text-sm rounded px-2 py-1 border ${theme.border} ${theme.surface} ${theme.text} disabled:opacity-30 focus:outline-none focus:ring-1 focus:ring-blue-400`}
              />
              <span className={`text-xs ${theme.textMuted}`}>〜</span>
              <input
                type="time"
                value={ds.endTime}
                onChange={(e) => setTime(i, 'endTime', e.target.value)}
                disabled={!ds.enabled}
                className={`flex-1 text-sm rounded px-2 py-1 border ${theme.border} ${theme.surface} ${theme.text} disabled:opacity-30 focus:outline-none focus:ring-1 focus:ring-blue-400`}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function SettingsPanel({ theme }: Props) {
  const {
    jukuMomo, jukuAsa, jukuAoi, swimmingAoi,
    setJukuMomo, setJukuAsa, setJukuAoi, setSwimmingAoi,
  } = useCalendarStore()

  const [open, setOpen] = useState(false)

  return (
    <div className={`border-t-2 ${theme.border} ${theme.surface}`}>
      {/* トグルボタン */}
      <button
        onClick={() => setOpen((v) => !v)}
        className={`w-full flex items-center justify-between px-4 py-3 ${theme.text} font-semibold text-sm`}
      >
        <span>繰り返し設定</span>
        <span className="text-lg">{open ? '▲' : '▼'}</span>
      </button>

      {open && (
        <div className="px-3 pb-4 overflow-y-auto max-h-[60vh]">
          <p className={`text-xs ${theme.textMuted} mb-3`}>
            設定した曜日・時刻がカレンダーのデフォルト表示になります。個別セルから上書きできます。
          </p>

          <RecurringForm
            label="もも の塾"
            setting={jukuMomo}
            onChange={setJukuMomo}
            theme={theme}
          />
          <RecurringForm
            label="朝 の塾"
            setting={jukuAsa}
            onChange={setJukuAsa}
            theme={theme}
          />
          <RecurringForm
            label="碧 の塾"
            setting={jukuAoi}
            onChange={setJukuAoi}
            theme={theme}
          />
          <RecurringForm
            label="碧 のスイミング"
            setting={swimmingAoi}
            onChange={setSwimmingAoi}
            theme={theme}
          />
        </div>
      )}
    </div>
  )
}
