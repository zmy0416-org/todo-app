import { useTodoContext } from "../context/todo-context"
export default function Header() {
  const { openCount } = useTodoContext()
  const taskOrTasks = openCount <= 1 ? 'task' : 'tasks'
  return (
    <header>
      <h1 className="text-gradient">You have {openCount} open {taskOrTasks}</h1>
    </header>
  )
}
