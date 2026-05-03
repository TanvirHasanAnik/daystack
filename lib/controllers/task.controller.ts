import { 
  createTask, 
  getTasksByUser, 
  updateTask, 
  deleteTask 
} from '@/models/task.model';

export async function fetchUserTasks(userId: number) {
  return await getTasksByUser(userId);
}

export async function createNewTask(userId: number, title: string, description?: string, deadline?: string) {
  if (!title) {
    throw new Error('Title is required');
  }
  const taskId = await createTask(userId, title, description, deadline);
  return taskId;
}

export async function updateExistingTask(userId: number, taskId: number, title: string, description?: string, deadline?: string) {
  const success = await updateTask(userId, taskId, title, description, deadline);
  if (!success) {
    throw new Error('Task not found or unauthorized');
  }
  return true;
}

export async function removeTask(userId: number, taskId: number) {
  const success = await deleteTask(userId, taskId);
  if (!success) {
    throw new Error('Task not found or unauthorized');
  }
  return true;
}
