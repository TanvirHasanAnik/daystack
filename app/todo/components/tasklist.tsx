import { getTasksByUser } from "@/models/task.model"
type TaskListProps = {
    id: number
}

export default async function TaskList({id}: TaskListProps){
const taskList = await getTasksByUser(id)
    return (
        <ul>
            {taskList.map((task) => {
                console.log(task.title)
                return <li key={task.id}>{task.title}</li>
            })}
        </ul>
    )
}