import React from "react"
import { useTodoContext } from "../context/todo-context"
import { v4 as uuid } from 'uuid'

export default function TodoInput() {
  const refInput = React.useRef()
  const { todos, updateTodos } = useTodoContext()
  const resetInput = React.useCallback(() => {
    refInput.current.value = ''
    refInput.current.focus()
  }, [])
  const handleAddTodo = () => {
    if (!refInput.current.value) {
      refInput.current.focus()
      return
    }
    updateTodos([
      ...todos,
      {
        id: uuid(),
        text: refInput.current.value,
        completed: false
      }
    ])
    resetInput()
  }
  return (
    <div className="input-container">
      <input placeholder="Add a new todo" ref={refInput} />
      <button onClick={handleAddTodo}>
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  )
}
