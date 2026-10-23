import { useState } from 'react'
import type { Todo } from '../types'

type Props = {
  todos: Todo[]
  onToggle: (id: string) => void
  onDelete: (id: string) => void
  onEdit: (id: string, text: string) => void
}

function TodoList({ todos, onToggle, onDelete, onEdit }: Props) {
  const [editingId, setEditingId] = useState<string | null>(null)
  const [draft, setDraft] = useState('')

  if (todos.length === 0) return <p className="empty">Nothing to do</p>

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.id === editingId ? (
            <input
              autoFocus
              value={draft}
              aria-label="Edit todo"
              onChange={(e) => setDraft(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  onEdit(todo.id, draft)
                  setEditingId(null)
                } else if (e.key === 'Escape') {
                  setEditingId(null)
                }
              }}
              onBlur={() => setEditingId(null)}
            />
          ) : (
            <label className={todo.done ? 'done' : undefined}>
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => onToggle(todo.id)}
              />
              <span
                onDoubleClick={() => {
                  setEditingId(todo.id)
                  setDraft(todo.text)
                }}
              >
                {todo.text}
              </span>
            </label>
          )}
          <button type="button" onClick={() => onDelete(todo.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
