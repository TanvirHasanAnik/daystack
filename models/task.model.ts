import { pool } from '@/lib/db';
import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';

export interface Task {
  id: number;
  user_id: number;
  title: string;
  description?: string;
  deadline?: Date;
  created_at: Date;
  updated_at: Date;
}

export async function createTask(
  user_id: number,
  title: string,
  description?: string,
  deadline?: string 
): Promise<number> {
  const [result] = await pool.query<ResultSetHeader>(
    'INSERT INTO tasks (user_id, title, description, deadline) VALUES (?, ?, ?, ?)',
    [user_id, title, description || null, deadline || null]
  );
  return result.insertId;
}

export async function getTasksByUser(user_id: number, limit: number = 10, cursor?: number): Promise<{ tasks: Task[], nextCursor: number | null }> {
  let query = 'SELECT * FROM tasks WHERE user_id = ?';
  const params: any[] = [user_id];

  if (cursor) {
    query += ' AND id < ?';
    params.push(cursor);
  }

  query += ' ORDER BY id DESC LIMIT ?';
  params.push(limit + 1);

  const [rows] = await pool.query<RowDataPacket[]>(query, params);
  const tasks = rows as Task[];
  
  let nextCursor: number | null = null;
  if (tasks.length > limit) {
    const lastItem = tasks.pop();
    nextCursor = lastItem!.id;
  }

  return { tasks, nextCursor };
}

export async function getTaskById(user_id: number, task_id: number): Promise<Task | null> {
  const [rows] = await pool.query<RowDataPacket[]>(
    'SELECT * FROM tasks WHERE id = ? AND user_id = ?',
    [task_id, user_id]
  );
  return rows[0] as Task || null;
}

export async function updateTask(
  user_id: number,
  task_id: number,
  title?: string,
  description?: string,
  deadline?: string
): Promise<boolean> {
  const [result] = await pool.query<ResultSetHeader>(
    'UPDATE tasks SET title = COALESCE(?, title), description = COALESCE(?, description), deadline = COALESCE(?, deadline) WHERE id = ? AND user_id = ?',
    [title, description, deadline, task_id, user_id]
  );
  return result.affectedRows > 0;
}

export async function deleteTask(user_id: number, task_id: number): Promise<boolean> {
  const [result] = await pool.query<ResultSetHeader>(
    'DELETE FROM tasks WHERE id = ? AND user_id = ?',
    [task_id, user_id]
  );
  return result.affectedRows > 0;
}
