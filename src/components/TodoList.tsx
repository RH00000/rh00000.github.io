import type { Todo } from '../types'

type Props = {
  todos: Todo[]
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

function TodoList({ todos, onToggle, onDelete }: Props) {
  if (todos.length === 0) return <p className="empty">Nothing to do</p>

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id}>
          <label className={todo.done ? 'done' : undefined}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => onToggle(todo.id)}
            />
            {todo.text}
          </label>
          <button type="button" onClick={() => onDelete(todo.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
