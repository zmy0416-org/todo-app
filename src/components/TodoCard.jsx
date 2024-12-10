import React from "react"
import { useTodoContext } from "../context/todo-context"

export default function TodoCard({ todo }) {
  const { todos, updateTodos } = useTodoContext();
  const handleDeleteTodo = () => updateTodos(todos.filter((item) => item.id !== todo.id))
  const handleCompleteTodo = React.useCallback(() => {
    updateTodos(todos.map((item) => item.id === todo.id ? { ...item, completed: !item.completed } : item))
  }, [todo, updateTodos, todos])

  return (
    <div className="card todo-item">
      <p>{todo.text}</p>
      <div className="todo-buttons">
        <button disabled={todo.completed} onClick={handleCompleteTodo}>
          <h6>Done</h6>
        </button>
        <button onClick={handleDeleteTodo}>
          <h6>Delete</h6>
        </button>
      </div>
    </div>
  )
}
