import { useState } from 'react'
import { useCalendarStore } from '../store'
import type { CalEvent, EventColor, Member } from '../types'
import {
  MEMBERS, MEMBER_LABELS, EVENT_COLORS, EVENT_COLOR_LABELS,
  EVENT_COLOR_CLASSES,
} from '../types'
import { generateId as genId } from '../utils'
import type { ThemeTokens } from '../themes'

interface Props {
  date: string
  editEvent?: CalEvent
  defaultMember?: Member
  onClose: () => void
  theme: ThemeTokens
}

export function EventDialog({ date, editEvent, defaultMember, onClose, theme }: Props) {
  const { addEvent, updateEvent } = useCalendarStore()

  const [title, setTitle] = useState(editEvent?.title ?? '')
  const [members, setMembers] = useState<Member[]>(
    editEvent?.members ?? (defaultMember ? [defaultMember] : [])
  )
  const [startTime, setStartTime] = useState(editEvent?.startTime ?? '')
  const [endTime, setEndTime] = useState(editEvent?.endTime ?? '')
  const [color, setColor] = useState<EventColor>(editEvent?.color ?? 'blue')
  const [note, setNote] = useState(editEvent?.note ?? '')

  const toggleMember = (m: Member) => {
    setMembers((prev) =>
      prev.includes(m) ? prev.filter((x) => x !== m) : [...prev, m]
    )
  }

  const handleSave = () => {
    if (!title.trim() || members.length === 0) return
    const ev: CalEvent = {
      id: editEvent?.id ?? genId(),
      title: title.trim(),
      members,
      date,
      startTime: startTime || undefined,
      endTime: endTime || undefined,
      color,
      note: note.trim() || undefined,
    }
    editEvent ? updateEvent(ev) : addEvent(ev)
    onClose()
  }

  return (
    <>
      <div className="fixed inset-0 bg-black/40 z-40" onClick={onClose} />
      <div className={`fixed bottom-0 left-0 right-0 z-50 ${theme.surface} rounded-t-2xl shadow-xl`}>
        <div className={`flex items-center justify-between px-4 py-3 border-b ${theme.border}`}>
          <span className={`font-semibold ${theme.text}`}>
            {editEvent ? '予定を編集' : '予定を追加'} — {date.slice(5).replace('-', '/')}
          </span>
          <button onClick={onClose} className={`w-8 h-8 flex items-center justify-center rounded-full ${theme.textMuted}`}>✕</button>
        </div>

        <div className="p-4 flex flex-col gap-4 max-h-[80vh] overflow-y-auto">
          {/* タイトル */}
          <div>
            <label className={`text-xs font-semibold ${theme.textMuted} mb-1 block`}>タイトル *</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="予定のタイトル"
              className={`w-full text-base rounded-lg px-3 py-2 border ${theme.border} ${theme.surface} ${theme.text} focus:outline-none focus:ring-2 focus:ring-blue-400`}
            />
          </div>

          {/* 対象メンバー */}
          <div>
            <label className={`text-xs font-semibold ${theme.textMuted} mb-1 block`}>対象メンバー *</label>
            <div className="flex flex-wrap gap-2">
              {MEMBERS.map((m) => (
                <button
                  key={m}
                  onClick={() => toggleMember(m)}
                  className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${
                    members.includes(m)
                      ? 'bg-blue-500 text-white border-blue-500'
                      : `${theme.border} ${theme.textMuted}`
                  }`}
                >
                  {MEMBER_LABELS[m]}
                </button>
              ))}
            </div>
          </div>

          {/* 時刻 */}
          <div className="flex gap-3">
            <div className="flex-1">
              <label className={`text-xs font-semibold ${theme.textMuted} mb-1 block`}>開始時刻</label>
              <input
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                className={`w-full text-base rounded-lg px-3 py-2 border ${theme.border} ${theme.surface} ${theme.text} focus:outline-none focus:ring-2 focus:ring-blue-400`}
              />
            </div>
            <div className="flex-1">
              <label className={`text-xs font-semibold ${theme.textMuted} mb-1 block`}>終了時刻</label>
              <input
                type="time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                className={`w-full text-base rounded-lg px-3 py-2 border ${theme.border} ${theme.surface} ${theme.text} focus:outline-none focus:ring-2 focus:ring-blue-400`}
              />
            </div>
          </div>

          {/* カラーラベル */}
          <div>
            <label className={`text-xs font-semibold ${theme.textMuted} mb-1 block`}>カラーラベル</label>
            <div className="flex flex-wrap gap-2">
              {EVENT_COLORS.map((c) => (
                <button
                  key={c}
                  onClick={() => setColor(c)}
                  className={`px-2 py-1 rounded text-xs border ${EVENT_COLOR_CLASSES[c]} ${
                    color === c ? 'ring-2 ring-offset-1 ring-blue-500' : ''
                  }`}
                >
                  {EVENT_COLOR_LABELS[c]}
                </button>
              ))}
            </div>
          </div>

          {/* メモ */}
          <div>
            <label className={`text-xs font-semibold ${theme.textMuted} mb-1 block`}>メモ</label>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={2}
              placeholder="メモ（任意）"
              className={`w-full text-base rounded-lg px-3 py-2 border ${theme.border} ${theme.surface} ${theme.text} focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none`}
            />
          </div>

          {/* 保存ボタン */}
          <button
            onClick={handleSave}
            disabled={!title.trim() || members.length === 0}
            className="w-full py-3 rounded-xl bg-blue-500 text-white font-semibold text-base disabled:opacity-40 active:bg-blue-600"
          >
            保存
          </button>
        </div>
      </div>
    </>
  )
}
