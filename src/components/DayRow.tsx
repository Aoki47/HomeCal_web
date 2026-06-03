import { useState, useRef } from 'react'
import { useCalendarStore } from '../store'
import type { CalEvent, Member } from '../types'
import { EVENT_COLOR_CLASSES } from '../types'
import type { ThemeTokens } from '../themes'
import { MamaShiftCell } from './MamaShiftCell'
import { EventBottomSheet } from './EventBottomSheet'
import { EventDialog } from './EventDialog'
import { toDateStr, getDayOfWeek, isToday, getRecurringSlot } from '../utils'
import { DAYS_OF_WEEK } from '../types'

interface Props {
  year: number
  month: number
  day: number
  theme: ThemeTokens
}

const MEMBER_ORDER: Member[] = ['papa', 'mama', 'momo', 'asa', 'aoi']

export function DayRow({ year, month, day, theme }: Props) {
  const {
    events,
    jukuMomo, jukuAsa, jukuAoi, swimmingAoi, overrides,
  } = useCalendarStore()

  const dateStr = toDateStr(year, month, day)
  const dow = getDayOfWeek(year, month, day)
  const today = isToday(year, month, day)
  const isWeekend = dow === 0 || dow === 6

  const [showSheet, setShowSheet] = useState(false)
  const [sheetMember, setSheetMember] = useState<Member | null>(null)
  const [showAdd, setShowAdd] = useState(false)
  const longPressTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const dayEvents = events.filter((e) => e.date === dateStr)

  const getEventsForMember = (m: Member): CalEvent[] =>
    dayEvents.filter((e) => e.members.includes(m))

  const getRecurring = (m: Member): { label: string; time: string } | null => {
    const slots: { source: Parameters<typeof getRecurringSlot>[3]; label: string }[] = []

    if (m === 'momo') {
      slots.push({ source: 'juku_momo', label: '塾' })
    } else if (m === 'asa') {
      slots.push({ source: 'juku_asa', label: '塾' })
    } else if (m === 'aoi') {
      slots.push({ source: 'juku_aoi', label: '塾' })
      slots.push({ source: 'swimming_aoi', label: '水泳' })
    }

    const settingMap = {
      juku_momo: jukuMomo,
      juku_asa: jukuAsa,
      juku_aoi: jukuAoi,
      swimming_aoi: swimmingAoi,
    }

    for (const { source, label } of slots) {
      const slot = getRecurringSlot(settingMap[source], dow, dateStr, source, overrides)
      if (slot) {
        return { label, time: `${slot.startTime}〜${slot.endTime}` }
      }
    }
    return null
  }

  const handleCellStart = (_m: Member) => {
    longPressTimer.current = setTimeout(() => {
      setShowAdd(true)
    }, 500)
  }

  const handleCellEnd = () => {
    if (longPressTimer.current) clearTimeout(longPressTimer.current)
  }

  const handleCellClick = (m: Member) => {
    setSheetMember(m)
    setShowSheet(true)
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
          const recurring = m !== 'papa' && m !== 'mama' ? getRecurring(m) : null
          const isMama = m === 'mama'

          return (
            <div
              key={m}
              className={`relative border-r last:border-r-0 ${theme.border} ${rowBase} flex flex-col items-center justify-start py-0.5 gap-0.5 ${isMama ? '' : 'cursor-pointer'}`}
              onMouseDown={isMama ? undefined : () => handleCellStart(m)}
              onMouseUp={isMama ? undefined : () => { handleCellEnd(); handleCellClick(m) }}
              onTouchStart={isMama ? undefined : () => handleCellStart(m)}
              onTouchEnd={isMama ? undefined : () => { handleCellEnd(); handleCellClick(m) }}
            >
              {isMama ? (
                <MamaShiftCell date={dateStr} theme={theme} />
              ) : (
                <>
                  {recurring && (
                    <span className={`text-[10px] rounded px-1 py-0.5 leading-tight ${theme.recurringBg} opacity-80`}>
                      {recurring.label}
                    </span>
                  )}
                  {mEvents.slice(0, 2).map((ev) => (
                    <span
                      key={ev.id}
                      className={`text-[10px] rounded px-1 py-0.5 leading-tight border truncate w-full text-center ${EVENT_COLOR_CLASSES[ev.color]}`}
                    >
                      {ev.title}
                    </span>
                  ))}
                  {mEvents.length > 2 && (
                    <span className={`text-[10px] ${theme.textMuted}`}>+{mEvents.length - 2}</span>
                  )}
                </>
              )}
            </div>
          )
        })}
      </div>

      {showSheet && sheetMember && (
        <EventBottomSheet
          events={dayEvents.filter((e) => e.members.includes(sheetMember))}
          date={dateStr}
          onClose={() => { setShowSheet(false); setSheetMember(null) }}
          theme={theme}
        />
      )}

      {showAdd && (
        <EventDialog
          date={dateStr}
          onClose={() => setShowAdd(false)}
          theme={theme}
        />
      )}
    </>
  )
}
