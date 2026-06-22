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

function emptyData(): Data {
  const d = makeDefaultRecurringSetting
  return { events: [], mamaShifts: {}, jukuMomo: d(), jukuAsa: d(), jukuAoi: d(), swimmingAoi: d(), overrides: [] }
}

function fromLocalStorage(): Data {
  try {
    const raw = JSON.parse(localStorage.getItem('homecal-data') ?? '{}')
    const d = makeDefaultRecurringSetting
    return {
      events:      raw.events      ?? [],
      mamaShifts:  raw.mamaShifts  ?? {},
      jukuMomo:    raw.jukuMomo    ?? d(),
      jukuAsa:     raw.jukuAsa     ?? d(),
      jukuAoi:     raw.jukuAoi     ?? d(),
      swimmingAoi: raw.swimmingAoi ?? d(),
      overrides:   raw.overrides   ?? [],
    }
  } catch { return emptyData() }
}

function dayInfo(d: Date) {
  const y = d.getFullYear(), m = d.getMonth() + 1, day = d.getDate()
  return {
    str: toDateStr(y, m, day),
    dow: getDayOfWeek(y, m, day),
    label: `${m}/${day}`,
    dayName: DAYS_OF_WEEK[getDayOfWeek(y, m, day)],
  }
}

export function WidgetPage() {
  const [data, setData] = useState<Data>(fromLocalStorage)

  useEffect(() => {
    if (!isFirebaseConfigured || !db) return
    const d = makeDefaultRecurringSetting
    const unsub = onValue(ref(db, '/'), (snap) => {
      const raw = snap.val() ?? {}
      const s = raw.settings ?? {}
      setData({
        events:      Object.values(raw.events    ?? {}),
        mamaShifts:  raw.mamaShifts ?? {},
        jukuMomo:    s.jukuMomo    ?? d(),
        jukuAsa:     s.jukuAsa     ?? d(),
        jukuAoi:     s.jukuAoi     ?? d(),
        swimmingAoi: s.swimmingAoi ?? d(),
        overrides:   Object.values(raw.overrides ?? {}),
      })
    })
    return () => unsub()
  }, [])

  const now = new Date()
  const tom = new Date(now); tom.setDate(tom.getDate() + 1)
  const today = dayInfo(now)
  const tomorrow = dayInfo(tom)

  const settingMap = {
    juku_momo: data.jukuMomo, juku_asa: data.jukuAsa,
    juku_aoi: data.jukuAoi, swimming_aoi: data.swimmingAoi,
  }

  function getItems(member: Member, dateStr: string, dow: number) {
    const items: { text: string; color?: string }[] = []
    if (member === 'mama') {
      const shift = (data.mamaShifts[dateStr] ?? '日') as MamaShift
      items.push({ text: SHIFT_LABEL[shift], color: SHIFT_COLOR[shift] })
    } else {
      RECURRING_DEFS.filter((r) => r.member === member).forEach(({ source, label }) => {
        const slot = getRecurringSlot(settingMap[source], dow, dateStr, source, data.overrides)
        if (slot) items.push({ text: label, color: '#4f46e5' })
      })
    }
    data.events
      .filter((e) => e.date === dateStr && e.members.includes(member))
      .forEach((e) => items.push({ text: e.title }))
    return items
  }

  const BORDER = '1px solid #f0f0f0'
  const DIVIDER = '1px solid #e2e8f0'

  return (
    <div style={{
      width: '155px', height: '155px',
      background: 'linear-gradient(150deg, #eff6ff 0%, #f8fafc 55%, #f0fdf4 100%)',
      borderRadius: '18px',
      padding: '8px 7px 7px',
      display: 'flex', flexDirection: 'column',
      fontFamily: '-apple-system, "Hiragino Sans", "Helvetica Neue", sans-serif',
    }}>

      {/* 日付ヘッダー */}
      <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '5px' }}>
        <div style={{ width: '19px', flexShrink: 0 }} />

        {/* 今日 */}
        <div style={{ flex: 1, paddingLeft: '2px' }}>
          <span style={{ fontSize: '11px', fontWeight: 800, color: '#1d4ed8', letterSpacing: '-0.5px' }}>
            {today.label}
          </span>
          <span style={{ fontSize: '9px', fontWeight: 600, color: '#93c5fd', marginLeft: '2px' }}>
            {today.dayName}
          </span>
        </div>

        {/* 明日 */}
        <div style={{ flex: 1, paddingLeft: '5px', borderLeft: DIVIDER }}>
          <span style={{ fontSize: '11px', fontWeight: 700, color: '#64748b', letterSpacing: '-0.5px' }}>
            {tomorrow.label}
          </span>
          <span style={{ fontSize: '9px', fontWeight: 500, color: '#cbd5e1', marginLeft: '2px' }}>
            {tomorrow.dayName}
          </span>
        </div>
      </div>

      {/* メンバー行 */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        {MEMBERS.map((member, idx) => {
          const tdItems = getItems(member, today.str, today.dow)
          const tmItems = getItems(member, tomorrow.str, tomorrow.dow)
          const isLast = idx === MEMBERS.length - 1

          const renderVal = (items: typeof tdItems, muted = false) => {
            if (items.length === 0) return (
              <span style={{ color: '#d1d5db', fontSize: '9px' }}>─</span>
            )
            return (
              <span style={{
                fontSize: '9px',
                fontWeight: items[0].color ? 600 : 400,
                color: items[0].color ?? (muted ? '#94a3b8' : '#1e293b'),
                overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', display: 'block',
              }}>
                {items.map((i) => i.text).join('・')}
              </span>
            )
          }

          return (
            <div key={member} style={{
              display: 'flex', alignItems: 'center',
              borderBottom: isLast ? 'none' : BORDER,
              paddingTop: '1px', paddingBottom: '1px',
            }}>
              {/* メンバー名 */}
              <span style={{
                fontSize: '9px', fontWeight: 700, color: '#94a3b8',
                width: '19px', flexShrink: 0, letterSpacing: '-0.3px',
              }}>
                {MEMBER_LABELS[member]}
              </span>

              {/* 今日のセル */}
              <div style={{ flex: 1, overflow: 'hidden', paddingRight: '3px' }}>
                {renderVal(tdItems)}
              </div>

              {/* 明日のセル */}
              <div style={{ flex: 1, overflow: 'hidden', paddingLeft: '5px', borderLeft: DIVIDER }}>
                {renderVal(tmItems, true)}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
