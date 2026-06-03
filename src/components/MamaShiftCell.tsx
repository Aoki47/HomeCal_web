import { useState } from 'react'
import { useCalendarStore } from '../store'
import { MAMA_SHIFTS, type MamaShift } from '../types'
import type { ThemeTokens } from '../themes'

interface Props {
  date: string
  theme: ThemeTokens
}

const SHIFT_BG: Record<MamaShift, string> = {
  '日': 'bg-blue-100 text-blue-800',
  '準': 'bg-orange-100 text-orange-800',
  '深': 'bg-purple-100 text-purple-800',
  '◯': 'bg-green-100 text-green-800',
}

const SHIFT_LABEL: Record<MamaShift, string> = {
  '日': '日勤',
  '準': '準夜勤',
  '深': '深夜勤',
  '◯': '休み',
}

export function MamaShiftCell({ date, theme }: Props) {
  const { mamaShifts, setMamaShift } = useCalendarStore()
  const shift: MamaShift = mamaShifts[date] ?? '日'
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* セル内バッジ：他の予定と同サイズ */}
      <button
        onClick={(e) => { e.stopPropagation(); setOpen(true) }}
        className={`text-[10px] rounded px-1 py-0.5 leading-tight w-full text-center font-bold ${SHIFT_BG[shift]}`}
        aria-label={`ママ勤務: ${shift}`}
      >
        {shift}
      </button>

      {/* 選択ボトムシート */}
      {open && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setOpen(false)}
          />
          <div className={`fixed bottom-0 left-0 right-0 z-50 ${theme.surface} rounded-t-2xl shadow-xl`}>
            <div className={`flex items-center justify-between px-4 py-3 border-b ${theme.border}`}>
              <span className={`font-semibold text-sm ${theme.text}`}>ママの勤務状況</span>
              <button
                onClick={() => setOpen(false)}
                className={`w-8 h-8 flex items-center justify-center ${theme.textMuted}`}
              >
                ✕
              </button>
            </div>
            <div className="p-4 flex flex-col gap-2">
              {MAMA_SHIFTS.map((s) => (
                <button
                  key={s}
                  onClick={() => { setMamaShift(date, s); setOpen(false) }}
                  className={`w-full py-3 rounded-xl text-base font-bold ${SHIFT_BG[s]} ${
                    s === shift ? 'ring-2 ring-inset ring-current' : ''
                  }`}
                >
                  {s}　{SHIFT_LABEL[s]}
                </button>
              ))}
              <button
                onClick={() => setOpen(false)}
                className={`w-full py-2 text-sm ${theme.textMuted}`}
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
