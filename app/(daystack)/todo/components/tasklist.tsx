'use client'

import { useEffect, useState } from "react";

type Task = {
  id: number;
  title: string;
};

type TaskListProps = {
  id: number;
};

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export default function TaskList({ id }: TaskListProps) {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/todo/tasks`);
        if (!res.ok) {
            const errorData = await res.json();
            console.error("API Error:", errorData.error);
            setTasks([]);
            return;
        }
        const data = await res.json();
        setTasks(data);
      } catch (err) {
        console.error("Failed to fetch tasks", err);
      }
    };

    fetchTasks();
  }, []);

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>{task.title}</li>
      ))}
    </ul>
  );
}