import { NextRequest, NextResponse } from 'next/server';
import { updateExistingTask, removeTask } from '@/lib/controllers/task.controller';
import { getUserIdFromRequest } from '@/lib/auth';

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const userId = getUserIdFromRequest(req);
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const taskId = parseInt(params.id);
    const { title, description, deadline } = await req.json();

    await updateExistingTask(userId, taskId, title, description, deadline);
    return NextResponse.json({ message: 'Task updated successfully' });
  } catch (error) {
    if (error instanceof Error && error.message === 'Task not found or unauthorized') {
      return NextResponse.json({ error: error.message }, { status: 404 });
    }
    console.error('Update task error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const userId = getUserIdFromRequest(req);
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const taskId = parseInt(params.id);
    await removeTask(userId, taskId);
    return NextResponse.json({ message: 'Task deleted successfully' });
  } catch (error) {
    if (error instanceof Error && error.message === 'Task not found or unauthorized') {
      return NextResponse.json({ error: error.message }, { status: 404 });
    }
    console.error('Delete task error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
