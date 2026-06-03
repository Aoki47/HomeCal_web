import { useState } from 'react'
import { useCalendarStore } from '../store'
import type { OverrideEvent } from '../types'
import type { ThemeTokens } from '../themes'
import { EventDialog } from './EventDialog'
import type { Member } from '../types'

interface Props {
  label: string
  source: OverrideEvent['source']
  date: string
  startTime: string
  endTime: string
  member: Member
  onClose: () => void
  theme: ThemeTokens
}

export function RecurringEventSheet({
  label, source, date, startTime, endTime, member, onClose, theme,
}: Props) {
  const { addOverride } = useCalendarStore()
  const [mode, setMode] = useState<'menu' | 'edit' | 'confirmDelete'>('menu')

  if (mode === 'edit') {
    return (
      <EventDialog
        date={date}
        defaultMember={member}
        defaultTitle={label}
        defaultStartTime={startTime}
        defaultEndTime={endTime}
        onClose={() => {
          // 繰り返しイベントを削除してカスタムイベントに差し替え
          addOverride({ source, date, action: 'delete' })
          onClose()
        }}
        theme={theme}
      />
    )
  }

  return (
    <>
      <div className="fixed inset-0 bg-black/40 z-40" onClick={onClose} />
      <div className={`fixed bottom-0 left-0 right-0 z-50 ${theme.surface} rounded-t-2xl shadow-xl`}>
        <div className={`flex items-center justify-between px-4 py-3 border-b ${theme.border}`}>
          <div>
            <p className={`font-semibold text-sm ${theme.text}`}>
              {label}（{date.slice(5).replace('-', '/')}）
            </p>
            <p className={`text-xs ${theme.textMuted}`}>{startTime}〜{endTime}</p>
          </div>
          <button onClick={onClose} className={`w-8 h-8 flex items-center justify-center ${theme.textMuted}`}>✕</button>
        </div>

        {mode === 'menu' && (
          <div className="p-4 flex flex-col gap-2">
            <button
              onClick={() => setMode('edit')}
              className={`w-full py-3 rounded-xl border ${theme.border} ${theme.text} text-sm font-semibold`}
            >
              この日だけ編集
            </button>
            <button
              onClick={() => setMode('confirmDelete')}
              className="w-full py-3 rounded-xl bg-red-500 text-white text-sm font-semibold"
            >
              この日だけ削除
            </button>
            <button
              onClick={onClose}
              className={`w-full py-3 rounded-xl text-sm ${theme.textMuted}`}
            >
              キャンセル
            </button>
          </div>
        )}

        {mode === 'confirmDelete' && (
          <div className="p-4 flex flex-col gap-2">
            <p className={`text-sm ${theme.text} mb-2`}>
              {date.slice(5).replace('-', '/')} の {label} を削除しますか？
            </p>
            <button
              onClick={() => {
                addOverride({ source, date, action: 'delete' })
                onClose()
              }}
              className="w-full py-3 rounded-xl bg-red-500 text-white text-sm font-semibold"
            >
              削除する
            </button>
            <button
              onClick={() => setMode('menu')}
              className={`w-full py-3 rounded-xl border ${theme.border} ${theme.textMuted} text-sm`}
            >
              戻る
            </button>
          </div>
        )}
      </div>
    </>
  )
}
