import React from "react"
import { useTodoContext } from "../context/todo-context"
import TodoCard from "./TodoCard"

export default function TodoList({ selectedTab }) {
  const { todos } = useTodoContext()
  const memorizedTodos = React.useMemo(() => selectedTab === 'All' ? todos
    : selectedTab === 'Open'
      ? todos.filter(todo => !todo.completed)
      : todos.filter(todo => todo.completed), [todos, selectedTab])
  return (
    <>
      {memorizedTodos.map((todo, todoIndex) => <TodoCard key={todoIndex} todo={todo} />)}
    </>
  )
}
