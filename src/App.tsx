import TodoFooter from './components/TodoFooter'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import { useTodos } from './hooks/useTodos'

function App() {
  const { todos, addTodo, toggleTodo, deleteTodo, clearCompleted } = useTodos()

  return (
    <main>
      <h1>Todos</h1>
      <TodoInput onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
      <TodoFooter todos={todos} onClearCompleted={clearCompleted} />
    </main>
  )
}

export default App
