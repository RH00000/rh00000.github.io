import { useState, type FormEvent } from 'react'

type Props = {
  onAdd: (text: string) => void
}

function TodoInput({ onAdd }: Props) {
  const [text, setText] = useState('')

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const trimmed = text.trim()
    if (!trimmed) return
    onAdd(trimmed)
    setText('')
  }

  return (
    <form className="todo-input" onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What needs doing?"
        aria-label="New todo"
      />
      <button type="submit">Add</button>
    </form>
  )
}

export default TodoInput
