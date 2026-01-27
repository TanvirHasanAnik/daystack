import { getTasksByUser } from "@/models/task.model"

const taskList = await getTasksByUser(1)

export default function todo() {

    return (
        <ul>
            {taskList.map((task) => {
                console.log(task.title)
                return <li key={task.id}>{task.title}</li>
            })}
        </ul>
    )
}