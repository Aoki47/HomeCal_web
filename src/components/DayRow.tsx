import { useState } from 'react'
import { useCalendarStore } from '../store'
import type { CalEvent, Member, OverrideEvent } from '../types'
import { EVENT_COLOR_CLASSES, DAYS_OF_WEEK } from '../types'
import type { ThemeTokens } from '../themes'
import { MamaShiftCell } from './MamaShiftCell'
import { EventBottomSheet } from './EventBottomSheet'
import { EventDialog } from './EventDialog'
import { RecurringEventSheet } from './RecurringEventSheet'
import { toDateStr, getDayOfWeek, isToday, getRecurringSlot } from '../utils'

interface Props {
  year: number
  month: number
  day: number
  theme: ThemeTokens
}

type RecurringInfo = {
  label: string
  startTime: string
  endTime: string
  source: OverrideEvent['source']
  member: Member
}

const MEMBER_ORDER: Member[] = ['papa', 'mama', 'momo', 'asa', 'aoi']
const MAX_VISIBLE = 3

const PLUS_BTN =
  'absolute bottom-0.5 right-0.5 w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold leading-none'

export function DayRow({ year, month, day, theme }: Props) {
  const { events, jukuMomo, jukuAsa, jukuAoi, swimmingAoi, overrides } =
    useCalendarStore()

  const dateStr = toDateStr(year, month, day)
  const dow = getDayOfWeek(year, month, day)
  const today = isToday(year, month, day)
  const isWeekend = dow === 0 || dow === 6

  const [sheetMember, setSheetMember] = useState<Member | null>(null)
  const [addMember, setAddMember] = useState<Member | null>(null)
  const [recurringTarget, setRecurringTarget] = useState<RecurringInfo | null>(null)

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
      return slot
        ? [{ label, startTime: slot.startTime, endTime: slot.endTime, source, member: m }]
        : []
    })
  }

  const rowBase = today
    ? `${theme.today} border-l-4`
    : isWeekend
    ? `${theme.weekend} ${theme.border}`
    : `${theme.surface} ${theme.border}`

  const plusBtnClass = `${PLUS_BTN} ${theme.textMuted} hover:bg-blue-100 hover:text-blue-600 active:bg-blue-200`

  return (
    <>
      <div
        className={`grid border-b ${theme.border} min-h-[3.5rem]`}
        style={{ gridTemplateColumns: '2.5rem repeat(5, 1fr)' }}
      >
        {/* 日付列 */}
        <div className={`flex flex-col items-center justify-center py-1 ${rowBase} border-r ${theme.border}`}>
          <span className={`text-xs font-bold ${today ? 'text-blue-600' : isWeekend ? 'text-red-500' : theme.textMuted}`}>
            {DAYS_OF_WEEK[dow]}
          </span>
          <span className={`text-sm font-bold leading-tight ${today ? 'text-blue-600' : theme.text}`}>
            {day}
          </span>
        </div>

        {/* 各メンバー列 */}
        {MEMBER_ORDER.map((m) => {
          const mEvents = getEventsForMember(m)
          const isMama = m === 'mama'

          return (
            <div
              key={m}
              className={`relative border-r last:border-r-0 ${theme.border} ${rowBase} flex flex-col items-start justify-start p-0.5 gap-0.5 min-w-0`}
            >
              {isMama ? (
                /* ━━ ママ列：シフトバッジ＋イベント＋＋ボタン ━━ */
                <>
                  {/* シフトバッジ（MamaShiftCell がクリックを自己管理） */}
                  <MamaShiftCell date={dateStr} theme={theme} />

                  {/* ママのイベント（シフト1枠分を引いた残り2枠） */}
                  {mEvents.slice(0, MAX_VISIBLE - 1).map((ev) => (
                    <button
                      key={ev.id}
                      onClick={(e) => { e.stopPropagation(); setSheetMember('mama') }}
                      className={`text-[10px] rounded px-1 py-0.5 leading-tight border truncate w-full text-left ${EVENT_COLOR_CLASSES[ev.color]}`}
                    >
                      {ev.title}
                    </button>
                  ))}
                  {mEvents.length > MAX_VISIBLE - 1 && (
                    <span
                      className={`text-[10px] ${theme.textMuted} cursor-pointer`}
                      onClick={(e) => { e.stopPropagation(); setSheetMember('mama') }}
                    >
                      +{mEvents.length - (MAX_VISIBLE - 1)}
                    </span>
                  )}

                  {/* ＋ボタン */}
                  <button
                    onClick={(e) => { e.stopPropagation(); setAddMember('mama') }}
                    className={`${PLUS_BTN} absolute bottom-0.5 right-0.5 ${theme.textMuted} hover:bg-blue-100 hover:text-blue-600`}
                    aria-label="ママの予定を追加"
                  >
                    ＋
                  </button>
                </>
              ) : (
                /* ━━ 通常列：繰り返し＋イベント＋＋ボタン ━━ */
                <>
                  {/* 繰り返しバッジ（塾・水泳） */}
                  {getRecurringList(m).map((r) => (
                    <button
                      key={r.source}
                      onClick={(e) => { e.stopPropagation(); setRecurringTarget(r) }}
                      className={`text-[10px] rounded px-1 py-0.5 leading-tight w-full text-left truncate ${theme.recurringBg} opacity-90`}
                      title={`${r.label} ${r.startTime}〜${r.endTime}`}
                    >
                      {r.label}
                    </button>
                  ))}

                  {/* 通常イベント（残り枠に収める） */}
                  {(() => {
                    const recurringCount = getRecurringList(m).length
                    const slots = Math.max(0, MAX_VISIBLE - recurringCount)
                    const visible = mEvents.slice(0, slots)
                    const hidden = mEvents.length - visible.length
                    return (
                      <>
                        {visible.map((ev) => (
                          <button
                            key={ev.id}
                            onClick={(e) => { e.stopPropagation(); setSheetMember(m) }}
                            className={`text-[10px] rounded px-1 py-0.5 leading-tight border truncate w-full text-left ${EVENT_COLOR_CLASSES[ev.color]}`}
                          >
                            {ev.title}
                          </button>
                        ))}
                        {hidden > 0 && (
                          <span
                            className={`text-[10px] ${theme.textMuted} cursor-pointer`}
                            onClick={(e) => { e.stopPropagation(); setSheetMember(m) }}
                          >
                            +{hidden}
                          </span>
                        )}
                      </>
                    )
                  })()}

                  {/* ＋ボタン */}
                  <button
                    onClick={(e) => { e.stopPropagation(); setAddMember(m) }}
                    className={plusBtnClass}
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

      {sheetMember && (
        <EventBottomSheet
          events={dayEvents.filter((e) => e.members.includes(sheetMember))}
          date={dateStr}
          onClose={() => setSheetMember(null)}
          theme={theme}
        />
      )}

      {addMember && (
        <EventDialog
          date={dateStr}
          defaultMember={addMember}
          onClose={() => setAddMember(null)}
          theme={theme}
        />
      )}

      {recurringTarget && (
        <RecurringEventSheet
          label={recurringTarget.label}
          source={recurringTarget.source}
          date={dateStr}
          startTime={recurringTarget.startTime}
          endTime={recurringTarget.endTime}
          member={recurringTarget.member}
          onClose={() => setRecurringTarget(null)}
          theme={theme}
        />
      )}
    </>
  )
}
