import { useEffect, useState } from 'react'
import { ref, onValue } from 'firebase/database'
import { db, isFirebaseConfigured } from '../firebase'
import type { CalEvent, Member, MamaShift, OverrideEvent, RecurringSetting } from '../types'
import { MEMBERS, MEMBER_LABELS, DAYS_OF_WEEK, makeDefaultRecurringSetting } from '../types'
import { toDateStr, getDayOfWeek, getRecurringSlot } from '../utils'

type Data = {
  events: CalEvent[]
  mamaShifts: Record<string, MamaShift>
  jukuMomo: RecurringSetting
  jukuAsa: RecurringSetting
  jukuAoi: RecurringSetting
  swimmingAoi: RecurringSetting
  overrides: OverrideEvent[]
}

const SHIFT_LABEL: Record<MamaShift, string> = {
  '日': '日勤', '準': '準夜', '深': '深夜', '◯': '休み',
}

const SHIFT_COLOR: Record<MamaShift, string> = {
  '日': '#2563eb', '準': '#ea580c', '深': '#7c3aed', '◯': '#16a34a',
}

const RECURRING_DEFS: { member: Member; source: OverrideEvent['source']; label: string }[] = [
  { member: 'momo', source: 'juku_momo',    label: '塾' },
  { member: 'asa',  source: 'juku_asa',     label: '塾' },
  { member: 'aoi',  source: 'juku_aoi',     label: '塾' },
  { member: 'aoi',  source: 'swimming_aoi', label: '水泳' },
]

function def() { return makeDefaultRecurringSetting() }

function fromLocalStorage(): Data {
  try {
    const raw = JSON.parse(localStorage.getItem('homecal-data') ?? '{}')
    return {
      events:      raw.events      ?? [],
      mamaShifts:  raw.mamaShifts  ?? {},
      jukuMomo:    raw.jukuMomo    ?? def(),
      jukuAsa:     raw.jukuAsa     ?? def(),
      jukuAoi:     raw.jukuAoi     ?? def(),
      swimmingAoi: raw.swimmingAoi ?? def(),
      overrides:   raw.overrides   ?? [],
    }
  } catch {
    return { events: [], mamaShifts: {}, jukuMomo: def(), jukuAsa: def(), jukuAoi: def(), swimmingAoi: def(), overrides: [] }
  }
}

export function WidgetPage() {
  const [data, setData] = useState<Data>(fromLocalStorage)

  useEffect(() => {
    if (!isFirebaseConfigured || !db) return
    const unsub = onValue(ref(db, '/'), (snap) => {
      const raw = snap.val() ?? {}
      const s = raw.settings ?? {}
      setData({
        events:      Object.values(raw.events    ?? {}),
        mamaShifts:  raw.mamaShifts ?? {},
        jukuMomo:    s.jukuMomo    ?? def(),
        jukuAsa:     s.jukuAsa     ?? def(),
        jukuAoi:     s.jukuAoi     ?? def(),
        swimmingAoi: s.swimmingAoi ?? def(),
        overrides:   Object.values(raw.overrides ?? {}),
      })
    })
    return () => unsub()
  }, [])

  const now = new Date()
  const todayStr = toDateStr(now.getFullYear(), now.getMonth() + 1, now.getDate())
  const dow = getDayOfWeek(now.getFullYear(), now.getMonth() + 1, now.getDate())
  const dateLabel = `${now.getMonth() + 1}/${now.getDate()}（${DAYS_OF_WEEK[dow]}）`

  const settingMap = {
    juku_momo:    data.jukuMomo,
    juku_asa:     data.jukuAsa,
    juku_aoi:     data.jukuAoi,
    swimming_aoi: data.swimmingAoi,
  }

  const todayEvents = data.events.filter((e) => e.date === todayStr)

  return (
    <div style={{
      width: '155px', height: '155px',
      background: 'rgba(255,255,255,0.92)',
      borderRadius: '16px',
      display: 'flex', flexDirection: 'column',
      padding: '9px 11px',
      fontFamily: '-apple-system, "Helvetica Neue", sans-serif',
    }}>
      {/* 日付ヘッダー */}
      <div style={{
        fontSize: '11px', fontWeight: 700,
        color: '#1d4ed8', marginBottom: '5px',
        letterSpacing: '-0.2px',
      }}>
        HomeCal　{dateLabel}
      </div>

      {/* メンバー行 */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        {MEMBERS.map((member) => {
          const items: { text: string; color?: string }[] = []

          if (member === 'mama') {
            const shift = (data.mamaShifts[todayStr] ?? '日') as MamaShift
            items.push({ text: SHIFT_LABEL[shift], color: SHIFT_COLOR[shift] })
          } else {
            RECURRING_DEFS.filter((d) => d.member === member).forEach(({ source, label }) => {
              const slot = getRecurringSlot(settingMap[source], dow, todayStr, source, data.overrides)
              if (slot) items.push({ text: label })
            })
          }

          todayEvents
            .filter((e) => e.members.includes(member))
            .forEach((e) => items.push({ text: e.title }))

          const label = items.length > 0 ? items.map((i) => i.text).join('・') : '─'
          const color = items.length > 0 ? (items[0].color ?? '#111827') : '#9ca3af'

          return (
            <div key={member} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <span style={{
                fontSize: '10px', fontWeight: 700,
                color: '#6b7280', minWidth: '18px', flexShrink: 0,
              }}>
                {MEMBER_LABELS[member]}
              </span>
              <span style={{
                fontSize: '10px', color,
                overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                flex: 1,
              }}>
                {label}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
