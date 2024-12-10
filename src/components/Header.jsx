import { useTodoContext } from "../context/todo-context"
export default function Header() {
  const { total } = useTodoContext()
  const taskOrTasks = total <= 1 ? 'task' : 'tasks'
  return (
    <header>
      <h1 className="text-gradient">You have {total} open {taskOrTasks}</h1>
    </header>
  )
}
