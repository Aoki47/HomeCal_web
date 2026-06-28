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
  '日': 'rgba(147,197,253,0.95)',
  '準': 'rgba(253,186,116,0.95)',
  '深': 'rgba(196,181,253,0.95)',
  '◯': 'rgba(110,231,183,0.95)',
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
  const dow = getDayOfWeek(y, m, day)
  return { str: toDateStr(y, m, day), dow, label: `${m}/${day}`, dayName: DAYS_OF_WEEK[dow] }
}

export function WidgetPage() {
  const [data, setData] = useState<Data>(fromLocalStorage)
  // 現在日時を state で管理し、毎分 React が再レンダリングする
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 60_000)
    return () => clearInterval(timer)
  }, [])

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
        if (slot) items.push({ text: label, color: 'rgba(196,181,253,0.9)' })
      })
    }
    data.events
      .filter((e) => e.date === dateStr && e.members.includes(member))
      .forEach((e) => items.push({ text: e.title }))
    return items
  }

  function Cell({ items, dim = false }: { items: { text: string; color?: string }[]; dim?: boolean }) {
    if (items.length === 0) {
      return <span style={{ color: 'rgba(255,255,255,0.22)', fontSize: '9px' }}>─</span>
    }
    const color = items[0].color ?? (dim ? 'rgba(255,255,255,0.65)' : '#ffffff')
    return (
      <span style={{
        fontSize: '9px', fontWeight: items[0].color ? 600 : 500, color,
        overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', display: 'block',
      }}>
        {items.map((i) => i.text).join('・')}
      </span>
    )
  }

  return (
    <div style={{
      width: '155px', height: '155px',
      position: 'relative',
      borderRadius: '22px',
      overflow: 'hidden',
      /* ダーク半透明ガラス — 他のウィジェットと同系統 */
      background: 'linear-gradient(145deg, rgba(55,48,42,0.72) 0%, rgba(38,33,29,0.68) 100%)',
      backdropFilter: 'blur(30px) saturate(160%) brightness(0.9)',
      WebkitBackdropFilter: 'blur(30px) saturate(160%) brightness(0.9)',
      border: '1px solid rgba(255,255,255,0.13)',
      boxShadow: [
        'inset 0 1px 0 rgba(255,255,255,0.22)',   /* 上端ハイライト */
        'inset 0 -1px 0 rgba(0,0,0,0.15)',
        '0 4px 24px rgba(0,0,0,0.35)',
      ].join(', '),
      padding: '9px 8px 8px',
      display: 'flex', flexDirection: 'column',
      fontFamily: '-apple-system, "Hiragino Sans", "SF Pro Display", sans-serif',
    }}>

      {/* 上端の光沢ライン */}
      <div style={{
        position: 'absolute',
        top: 0, left: '20%', right: '20%', height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.75), transparent)',
        pointerEvents: 'none',
      }} />

      {/* 日付ヘッダー */}
      <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '6px' }}>
        <div style={{ width: '20px', flexShrink: 0 }} />

        {/* 今日 */}
        <div style={{ flex: 1, paddingLeft: '1px' }}>
          <span style={{
            fontSize: '11px', fontWeight: 800, letterSpacing: '-0.6px',
            color: '#ffffff',
          }}>
            {today.label}
          </span>
          <span style={{
            fontSize: '8.5px', fontWeight: 600, marginLeft: '2px',
            color: 'rgba(255,255,255,0.75)',
          }}>
            {today.dayName}
          </span>
        </div>

        {/* 明日 */}
        <div style={{
          flex: 1, paddingLeft: '6px',
          borderLeft: '1px solid rgba(255,255,255,0.18)',
        }}>
          <span style={{
            fontSize: '11px', fontWeight: 700, letterSpacing: '-0.6px',
            color: 'rgba(255,255,255,0.65)',
          }}>
            {tomorrow.label}
          </span>
          <span style={{
            fontSize: '8.5px', fontWeight: 500, marginLeft: '2px',
            color: 'rgba(255,255,255,0.45)',
          }}>
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

          return (
            <div key={member} style={{
              display: 'flex', alignItems: 'center',
              borderBottom: isLast ? 'none' : '1px solid rgba(255,255,255,0.07)',
              paddingTop: '1.5px', paddingBottom: '1.5px',
            }}>
              {/* メンバー名 */}
              <span style={{
                fontSize: '9px', fontWeight: 700,
                color: '#ffffff',
                width: '20px', flexShrink: 0, letterSpacing: '-0.3px',
              }}>
                {MEMBER_LABELS[member]}
              </span>

              {/* 今日 */}
              <div style={{ flex: 1, overflow: 'hidden', paddingRight: '3px' }}>
                <Cell items={tdItems} />
              </div>

              {/* 明日 */}
              <div style={{
                flex: 1, overflow: 'hidden',
                paddingLeft: '6px',
                borderLeft: '1px solid rgba(255,255,255,0.14)',
              }}>
                <Cell items={tmItems} dim />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
