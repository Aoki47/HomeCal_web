import { useState, useRef, useEffect } from 'react'
import { useCalendarStore } from '../store'
import { MAMA_SHIFTS, type MamaShift } from '../types'
import type { ThemeTokens } from '../themes'

interface Props {
  date: string
  theme: ThemeTokens
}

const SHIFT_COLORS: Record<MamaShift, string> = {
  '日': 'bg-blue-100 text-blue-800',
  '準': 'bg-orange-100 text-orange-800',
  '深': 'bg-purple-100 text-purple-800',
  '◯': 'bg-green-100 text-green-800',
}

export function MamaShiftCell({ date, theme }: Props) {
  const { mamaShifts, setMamaShift } = useCalendarStore()
  const shift: MamaShift = mamaShifts[date] ?? '日'
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const handler = (e: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    document.addEventListener('touchstart', handler)
    return () => {
      document.removeEventListener('mousedown', handler)
      document.removeEventListener('touchstart', handler)
    }
  }, [open])

  return (
    <div ref={ref} className="relative w-full flex justify-center">
      <button
        onClick={() => setOpen((v) => !v)}
        className={`min-w-[2.5rem] min-h-[2.5rem] px-1 rounded text-sm font-bold flex items-center justify-center gap-0.5 ${SHIFT_COLORS[shift]}`}
        aria-label={`ママ勤務: ${shift}`}
      >
        {shift}
        <span className="text-xs opacity-60">▾</span>
      </button>

      {open && (
        <div className={`absolute top-full left-1/2 -translate-x-1/2 z-40 mt-1 ${theme.surface} ${theme.border} border rounded-lg shadow-xl overflow-hidden`}>
          {MAMA_SHIFTS.map((s) => (
            <button
              key={s}
              onClick={() => { setMamaShift(date, s); setOpen(false) }}
              className={`block w-full min-h-[2.75rem] px-5 py-2 text-sm font-bold text-center ${SHIFT_COLORS[s]} ${s === shift ? 'ring-2 ring-inset ring-current' : ''} hover:opacity-80`}
            >
              {s}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
