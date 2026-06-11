'use client'

import { useEffect, useState } from "react";

type Task = {
  id: number;
  title: string;
};

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [nextCursor, setNextCursor] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchTasks = async (cursor?: number) => {
    setLoading(true);
    try {
      const url = new URL(`${BASE_URL}/api/todo/tasks`);
      if (cursor) url.searchParams.set('cursor', cursor.toString());

      const res = await fetch(url.toString());
      if (!res.ok) {
          const errorData = await res.json();
          console.error("API Error:", errorData.error);
          return;
      }
      const data = await res.json();
      setTasks(prev => cursor ? [...prev, ...data.tasks] : data.tasks);
      setNextCursor(data.nextCursor);
    } catch (err) {
      console.error("Failed to fetch tasks", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
      {nextCursor && (
        <button 
          onClick={() => fetchTasks(nextCursor)} 
          disabled={loading}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
        >
          {loading ? 'Loading...' : 'Load More'}
        </button>
      )}
    </div>
  );
}