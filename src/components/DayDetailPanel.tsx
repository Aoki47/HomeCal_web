import { useCalendarStore } from '../store'
import { MEMBER_LABELS, EVENT_COLOR_CLASSES } from '../types'
import type { ThemeTokens } from '../themes'
import { getDayOfWeek, getRecurringSlot } from '../utils'
import { DAYS_OF_WEEK } from '../types'
import type { OverrideEvent } from '../types'

interface Props {
  date: string   // YYYY-MM-DD
  onClose: () => void
  theme: ThemeTokens
}

const SHIFT_BG: Record<string, string> = {
  '日': 'bg-blue-100 text-blue-800',
  '準': 'bg-orange-100 text-orange-800',
  '深': 'bg-purple-100 text-purple-800',
  '◯': 'bg-green-100 text-green-800',
}

const SHIFT_LABEL: Record<string, string> = {
  '日': '日勤', '準': '準夜勤', '深': '深夜勤', '◯': '休み',
}

const RECURRING_DEFS: {
  source: OverrideEvent['source']
  memberLabel: string
  label: string
}[] = [
  { source: 'juku_momo',    memberLabel: 'もも', label: '塾' },
  { source: 'juku_asa',     memberLabel: '朝',   label: '塾' },
  { source: 'juku_aoi',     memberLabel: '碧',   label: '塾' },
  { source: 'swimming_aoi', memberLabel: '碧',   label: '水泳' },
]

export function DayDetailPanel({ date, onClose, theme }: Props) {
  const {
    events, mamaShifts,
    jukuMomo, jukuAsa, jukuAoi, swimmingAoi, overrides,
  } = useCalendarStore()

  const [year, month, day] = date.split('-').map(Number)
  const dow = getDayOfWeek(year, month, day)
  const dateLabel = `${month}月${day}日（${DAYS_OF_WEEK[dow]}）`

  const mamaShift = mamaShifts[date] ?? '日'

  const settingMap = {
    juku_momo: jukuMomo, juku_asa: jukuAsa,
    juku_aoi: jukuAoi, swimming_aoi: swimmingAoi,
  }

  const recurringItems = RECURRING_DEFS.flatMap(({ source, memberLabel, label }) => {
    const slot = getRecurringSlot(settingMap[source], dow, date, source, overrides)
    return slot ? [{ memberLabel, label, startTime: slot.startTime, endTime: slot.endTime }] : []
  })

  const dateEvents = events.filter((e) => e.date === date)

  const hasAnything = recurringItems.length > 0 || dateEvents.length > 0

  return (
    <div className={`border-t-2 ${theme.border} ${theme.surface} shrink-0`}>
      {/* ヘッダー */}
      <div className={`flex items-center justify-between px-4 py-2 border-b ${theme.border}`}>
        <span className={`font-semibold text-sm ${theme.text}`}>{dateLabel} の予定</span>
        <button
          onClick={onClose}
          className={`w-7 h-7 flex items-center justify-center rounded-full text-sm ${theme.textMuted}`}
        >
          ✕
        </button>
      </div>

      {/* コンテンツ */}
      <div className="overflow-y-auto max-h-52 px-3 py-2 flex flex-col gap-1.5">
        {/* ママのシフト */}
        <div className={`flex items-center gap-2 rounded-lg px-2 py-1.5 ${SHIFT_BG[mamaShift]}`}>
          <span className="text-xs font-bold w-8 shrink-0">ママ</span>
          <span className="text-xs font-semibold">{mamaShift}　{SHIFT_LABEL[mamaShift]}</span>
        </div>

        {/* 繰り返し予定 */}
        {recurringItems.map((r, i) => (
          <div
            key={i}
            className={`flex items-center gap-2 rounded-lg px-2 py-1.5 ${theme.recurringBg}`}
          >
            <span className={`text-xs font-bold w-8 shrink-0 ${theme.text}`}>{r.memberLabel}</span>
            <span className={`text-xs font-semibold ${theme.text}`}>{r.label}</span>
            <span className={`text-xs ml-auto ${theme.textMuted}`}>
              {r.startTime}〜{r.endTime}
            </span>
          </div>
        ))}

        {/* 通常イベント */}
        {dateEvents.map((ev) => (
          <div
            key={ev.id}
            className={`flex items-center gap-2 rounded-lg px-2 py-1.5 border ${EVENT_COLOR_CLASSES[ev.color]}`}
          >
            <span className="text-xs font-bold w-8 shrink-0 truncate">
              {ev.members.map((m) => MEMBER_LABELS[m]).join('/')}
            </span>
            <span className="text-xs font-semibold truncate flex-1">{ev.title}</span>
            {ev.startTime ? (
              <span className="text-xs ml-auto shrink-0">
                {ev.startTime}{ev.endTime ? '〜' + ev.endTime : ''}
              </span>
            ) : (
              <span className="text-xs ml-auto shrink-0 opacity-60">終日</span>
            )}
          </div>
        ))}

        {/* ママのシフトのみで他は予定なし */}
        {!hasAnything && (
          <p className={`text-center text-xs py-3 ${theme.textMuted}`}>
            ママのシフト以外に予定はありません
          </p>
        )}
      </div>
    </div>
  )
}
