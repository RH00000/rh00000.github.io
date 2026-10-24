import { useEffect, useState } from 'react'
import type { Todo } from '../types'

const STORAGE_KEY = 'todos'

function loadTodos(): Todo[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    const parsed: unknown = stored ? JSON.parse(stored) : []
    return Array.isArray(parsed)
      ? parsed.filter(
          (t) =>
            t &&
            typeof t.id === 'string' &&
            typeof t.text === 'string' &&
            typeof t.done === 'boolean',
        )
      : []
  } catch {
    return []
  }
}

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>(loadTodos)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
    } catch {
      // storage unavailable, keep in-memory
    }
  }, [todos])

  function addTodo(text: string) {
    setTodos((prev) => [...prev, { id: crypto.randomUUID(), text, done: false }])
  }

  function toggleTodo(id: string) {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)),
    )
  }

  function deleteTodo(id: string) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  function editTodo(id: string, text: string) {
    const trimmed = text.trim()
    if (!trimmed) return
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text: trimmed } : todo)),
    )
  }

  function clearCompleted() {
    setTodos((prev) => prev.filter((todo) => !todo.done))
  }

  return { todos, addTodo, toggleTodo, deleteTodo, editTodo, clearCompleted }
}
