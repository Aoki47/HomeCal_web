import { useState } from 'react'
import { useCalendarStore } from '../store'
import type { CalEvent, Member, OverrideEvent } from '../types'
import { EVENT_COLOR_CLASSES, DAYS_OF_WEEK } from '../types'
import type { ThemeTokens } from '../themes'
import { MamaShiftCell } from './MamaShiftCell'
import { EventBottomSheet } from './EventBottomSheet'
import { EventDialog } from './EventDialog'
import { toDateStr, getDayOfWeek, isToday, getRecurringSlot } from '../utils'

interface Props {
  year: number
  month: number
  day: number
  theme: ThemeTokens
}

type RecurringInfo = {
  label: string
  time: string
  source: OverrideEvent['source']
}

const MEMBER_ORDER: Member[] = ['papa', 'mama', 'momo', 'asa', 'aoi']

export function DayRow({ year, month, day, theme }: Props) {
  const {
    events,
    jukuMomo, jukuAsa, jukuAoi, swimmingAoi,
    overrides, addOverride,
  } = useCalendarStore()

  const dateStr = toDateStr(year, month, day)
  const dow = getDayOfWeek(year, month, day)
  const today = isToday(year, month, day)
  const isWeekend = dow === 0 || dow === 6

  const [sheetMember, setSheetMember] = useState<Member | null>(null)
  const [addMember, setAddMember] = useState<Member | null>(null)
  const [deleteRecurring, setDeleteRecurring] = useState<RecurringInfo | null>(null)

  const dayEvents = events.filter((e) => e.date === dateStr)

  const getEventsForMember = (m: Member): CalEvent[] =>
    dayEvents.filter((e) => e.members.includes(m))

  const getRecurringList = (m: Member): RecurringInfo[] => {
    const slots: { source: OverrideEvent['source']; label: string }[] = []
    if (m === 'momo') slots.push({ source: 'juku_momo', label: '塾' })
    else if (m === 'asa') slots.push({ source: 'juku_asa', label: '塾' })
    else if (m === 'aoi') {
      slots.push({ source: 'juku_aoi', label: '塾' })
      slots.push({ source: 'swimming_aoi', label: '水泳' })
    }

    const settingMap = {
      juku_momo: jukuMomo, juku_asa: jukuAsa,
      juku_aoi: jukuAoi, swimming_aoi: swimmingAoi,
    }

    return slots.flatMap(({ source, label }) => {
      const slot = getRecurringSlot(settingMap[source], dow, dateStr, source, overrides)
      return slot ? [{ label, time: `${slot.startTime}〜${slot.endTime}`, source }] : []
    })
  }

  const rowBase = today
    ? `${theme.today} border-l-4`
    : isWeekend
    ? `${theme.weekend} ${theme.border}`
    : `${theme.surface} ${theme.border}`

  return (
    <>
      <div
        className={`grid border-b ${theme.border} min-h-[3.5rem]`}
        style={{ gridTemplateColumns: '2.5rem repeat(5, 1fr)' }}
      >
        {/* 日付 */}
        <div className={`flex flex-col items-center justify-center py-1 ${rowBase} border-r ${theme.border}`}>
          <span className={`text-xs font-bold ${today ? 'text-blue-600' : isWeekend ? 'text-red-500' : theme.textMuted}`}>
            {DAYS_OF_WEEK[dow]}
          </span>
          <span className={`text-sm font-bold leading-tight ${today ? 'text-blue-600' : theme.text}`}>
            {day}
          </span>
        </div>

        {/* 各メンバーセル */}
        {MEMBER_ORDER.map((m) => {
          const mEvents = getEventsForMember(m)
          const recurringList = m !== 'papa' && m !== 'mama' ? getRecurringList(m) : []
          const isMama = m === 'mama'

          return (
            <div
              key={m}
              className={`relative border-r last:border-r-0 ${theme.border} ${rowBase} flex flex-col items-start justify-start p-0.5 gap-0.5 min-w-0`}
            >
              {isMama ? (
                <div className="w-full flex justify-center">
                  <MamaShiftCell date={dateStr} theme={theme} />
                </div>
              ) : (
                <>
                  {/* 繰り返しバッジ（タップで削除） */}
                  {recurringList.map((r) => (
                    <button
                      key={r.source}
                      onClick={(e) => { e.stopPropagation(); setDeleteRecurring(r) }}
                      className={`text-[10px] rounded px-1 py-0.5 leading-tight w-full text-left truncate ${theme.recurringBg} opacity-90`}
                      title={`${r.label} ${r.time}`}
                    >
                      {r.label}
                    </button>
                  ))}

                  {/* 通常イベント（タップでシート） */}
                  {mEvents.slice(0, 2).map((ev) => (
                    <button
                      key={ev.id}
                      onClick={(e) => { e.stopPropagation(); setSheetMember(m) }}
                      className={`text-[10px] rounded px-1 py-0.5 leading-tight border truncate w-full text-left ${EVENT_COLOR_CLASSES[ev.color]}`}
                    >
                      {ev.title}
                    </button>
                  ))}
                  {mEvents.length > 2 && (
                    <span className={`text-[10px] ${theme.textMuted}`}>+{mEvents.length - 2}</span>
                  )}

                  {/* ＋ボタン */}
                  <button
                    onClick={(e) => { e.stopPropagation(); setAddMember(m) }}
                    className={`absolute bottom-0.5 right-0.5 w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold leading-none ${theme.textMuted} hover:bg-blue-100 hover:text-blue-600 active:bg-blue-200`}
                    aria-label={`${m}の予定を追加`}
                  >
                    ＋
                  </button>
                </>
              )}
            </div>
          )
        })}
      </div>

      {/* 通常イベントのボトムシート */}
      {sheetMember && (
        <EventBottomSheet
          events={dayEvents.filter((e) => e.members.includes(sheetMember))}
          date={dateStr}
          onClose={() => setSheetMember(null)}
          theme={theme}
        />
      )}

      {/* 新規予定追加ダイアログ */}
      {addMember && (
        <EventDialog
          date={dateStr}
          defaultMember={addMember}
          onClose={() => setAddMember(null)}
          theme={theme}
        />
      )}

      {/* 繰り返し予定の個別削除確認 */}
      {deleteRecurring && (
        <>
          <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setDeleteRecurring(null)} />
          <div className={`fixed bottom-0 left-0 right-0 z-50 ${theme.surface} rounded-t-2xl shadow-xl p-5`}>
            <p className={`font-semibold text-sm mb-1 ${theme.text}`}>
              {deleteRecurring.label}（{dateStr.slice(5).replace('-', '/')}）
            </p>
            <p className={`text-xs mb-4 ${theme.textMuted}`}>{deleteRecurring.time}</p>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => {
                  addOverride({ source: deleteRecurring.source, date: dateStr, action: 'delete' })
                  setDeleteRecurring(null)
                }}
                className="w-full py-3 rounded-xl bg-red-500 text-white font-semibold text-sm"
              >
                この日だけ削除
              </button>
              <button
                onClick={() => setDeleteRecurring(null)}
                className={`w-full py-3 rounded-xl border ${theme.border} ${theme.textMuted} text-sm`}
              >
                キャンセル
              </button>
            </div>
          </div>
        </>
      )}
    </>
  )
}
