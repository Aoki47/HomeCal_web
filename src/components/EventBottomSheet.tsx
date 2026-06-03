import { useState } from 'react'
import { useCalendarStore } from '../store'
import type { CalEvent } from '../types'
import { EVENT_COLOR_CLASSES, MEMBER_LABELS } from '../types'
import type { ThemeTokens } from '../themes'
import { EventDialog } from './EventDialog'

interface Props {
  events: CalEvent[]
  date: string
  onClose: () => void
  theme: ThemeTokens
}

export function EventBottomSheet({ events, date, onClose, theme }: Props) {
  const { deleteEvent } = useCalendarStore()
  const [editing, setEditing] = useState<CalEvent | null>(null)
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null)

  if (editing) {
    return (
      <EventDialog
        date={date}
        editEvent={editing}
        onClose={() => setEditing(null)}
        theme={theme}
      />
    )
  }

  return (
    <>
      <div
        className="fixed inset-0 bg-black/40 z-40"
        onClick={onClose}
      />
      <div className={`fixed bottom-0 left-0 right-0 z-50 ${theme.surface} rounded-t-2xl shadow-xl max-h-[70vh] flex flex-col`}>
        <div className={`flex items-center justify-between px-4 py-3 border-b ${theme.border}`}>
          <span className={`font-semibold ${theme.text}`}>{date.slice(5).replace('-', '/')} の予定</span>
          <button onClick={onClose} className={`w-8 h-8 flex items-center justify-center rounded-full ${theme.textMuted}`}>✕</button>
        </div>
        <div className="overflow-y-auto flex-1 p-3 flex flex-col gap-2">
          {events.length === 0 && (
            <p className={`text-center py-6 ${theme.textMuted}`}>予定なし</p>
          )}
          {events.map((ev) => (
            <div
              key={ev.id}
              className={`rounded-lg border p-3 ${EVENT_COLOR_CLASSES[ev.color]}`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm">{ev.title}</p>
                  <p className="text-xs mt-0.5">
                    {ev.members.map((m) => MEMBER_LABELS[m]).join('・')}
                    {ev.startTime && ` ${ev.startTime}${ev.endTime ? '〜' + ev.endTime : ''}`}
                  </p>
                  {ev.note && <p className="text-xs mt-1 opacity-75">{ev.note}</p>}
                </div>
                <div className="flex gap-1 shrink-0">
                  <button
                    onClick={() => setEditing(ev)}
                    className="px-2 py-1 text-xs rounded bg-white/50 hover:bg-white/80"
                  >
                    編集
                  </button>
                  <button
                    onClick={() => setConfirmDelete(ev.id)}
                    className="px-2 py-1 text-xs rounded bg-white/50 hover:bg-red-100 text-red-700"
                  >
                    削除
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {confirmDelete && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/50">
          <div className={`${theme.surface} rounded-xl p-5 mx-4 shadow-xl`}>
            <p className={`${theme.text} text-sm mb-4`}>この予定を削除しますか？</p>
            <div className="flex gap-2 justify-end">
              <button
                onClick={() => setConfirmDelete(null)}
                className={`px-4 py-2 text-sm rounded-lg ${theme.border} border ${theme.textMuted}`}
              >
                キャンセル
              </button>
              <button
                onClick={() => { deleteEvent(confirmDelete); setConfirmDelete(null); onClose() }}
                className="px-4 py-2 text-sm rounded-lg bg-red-500 text-white"
              >
                削除
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
