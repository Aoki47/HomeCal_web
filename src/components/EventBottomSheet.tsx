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

type Mode = 'list' | 'confirm'

export function EventBottomSheet({ events, date, onClose, theme }: Props) {
  const { deleteEvent } = useCalendarStore()
  const [editing, setEditing] = useState<CalEvent | null>(null)
  const [mode, setMode] = useState<Mode>('list')
  const [deleteTarget, setDeleteTarget] = useState<CalEvent | null>(null)

  // 編集モードは EventDialog を直接返す
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

  const handleDeleteClick = (ev: CalEvent) => {
    setDeleteTarget(ev)
    setMode('confirm')
  }

  const handleDeleteConfirm = () => {
    if (deleteTarget) deleteEvent(deleteTarget.id)
    onClose()
  }

  const handleDeleteCancel = () => {
    setDeleteTarget(null)
    setMode('list')
  }

  return (
    <>
      <div className="fixed inset-0 bg-black/40 z-40" onClick={onClose} />

      <div className={`fixed bottom-0 left-0 right-0 z-50 ${theme.surface} rounded-t-2xl shadow-xl max-h-[70vh] flex flex-col`}>

        {/* ── 一覧モード ── */}
        {mode === 'list' && (
          <>
            <div className={`flex items-center justify-between px-4 py-3 border-b ${theme.border} shrink-0`}>
              <span className={`font-semibold ${theme.text}`}>
                {date.slice(5).replace('-', '/')} の予定
              </span>
              <button
                onClick={onClose}
                className={`w-8 h-8 flex items-center justify-center rounded-full ${theme.textMuted}`}
              >
                ✕
              </button>
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
                        className="px-3 py-1.5 text-xs rounded-lg bg-white/60 hover:bg-white/90 font-medium"
                      >
                        編集
                      </button>
                      <button
                        onClick={() => handleDeleteClick(ev)}
                        className="px-3 py-1.5 text-xs rounded-lg bg-white/60 hover:bg-red-100 text-red-600 font-medium"
                      >
                        削除
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* ── 削除確認モード ── */}
        {mode === 'confirm' && deleteTarget && (
          <div className="p-5 flex flex-col gap-4">
            <div className={`flex items-center justify-between border-b ${theme.border} pb-3`}>
              <span className={`font-semibold ${theme.text}`}>予定を削除</span>
              <button
                onClick={handleDeleteCancel}
                className={`w-8 h-8 flex items-center justify-center rounded-full ${theme.textMuted}`}
              >
                ✕
              </button>
            </div>

            {/* 削除対象の予定を表示 */}
            <div className={`rounded-lg border p-3 ${EVENT_COLOR_CLASSES[deleteTarget.color]}`}>
              <p className="font-semibold text-sm">{deleteTarget.title}</p>
              <p className="text-xs mt-0.5">
                {deleteTarget.members.map((m) => MEMBER_LABELS[m]).join('・')}
                {deleteTarget.startTime && ` ${deleteTarget.startTime}${deleteTarget.endTime ? '〜' + deleteTarget.endTime : ''}`}
              </p>
            </div>

            <p className={`text-sm ${theme.textMuted}`}>この予定を削除しますか？</p>

            <div className="flex flex-col gap-2">
              <button
                onClick={handleDeleteConfirm}
                className="w-full py-3 rounded-xl bg-red-500 text-white font-semibold text-sm"
              >
                削除する
              </button>
              <button
                onClick={handleDeleteCancel}
                className={`w-full py-3 rounded-xl border ${theme.border} ${theme.textMuted} text-sm`}
              >
                キャンセル
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
