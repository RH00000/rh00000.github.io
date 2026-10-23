import type { Todo } from '../types'

type Props = {
  todos: Todo[]
  onClearCompleted: () => void
}

function TodoFooter({ todos, onClearCompleted }: Props) {
  if (todos.length === 0) return null

  const remaining = todos.filter((todo) => !todo.done).length
  const hasCompleted = remaining < todos.length

  return (
    <footer className="todo-footer">
      <span>
        {remaining} {remaining === 1 ? 'item' : 'items'} left
      </span>
      <button type="button" disabled={!hasCompleted} onClick={onClearCompleted}>
        Clear completed
      </button>
    </footer>
  )
}

export default TodoFooter
