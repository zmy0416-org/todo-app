import React from "react"
import { Header, Tabs, TodoList, TodoInput } from "./components"
import useStorage from "./hooks/use-storage"
import { TodoContext } from "./context/todo-context"

function App() {
  const [todos, setTodos] = React.useState([])
  const [selectedTab, setSelectedTab] = React.useState('Open')
  const storageKeyRef = React.useRef(Symbol('todo-app').toString())
  const { value, update } = useStorage(storageKeyRef.current)
  React.useEffect(
    () => {
      if (!value) return
      setTodos(value.todos ?? [])
    },
    []
  )
  return (
    <TodoContext.Provider value={
      {
        todos,
        total: todos.length,
        openCount: todos.filter(todo => !todo.completed).length,
        updateTodos: todos => {
          update({ todos })
          setTodos(todos)
        }
      }
    }>
      <Header />
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <TodoList selectedTab={selectedTab} />
      <TodoInput />
    </TodoContext.Provider>
  )
}

export default App
