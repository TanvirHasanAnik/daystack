import { NextRequest, NextResponse } from 'next/server';
import { fetchUserTasks, createNewTask } from '@/lib/controllers/task.controller';
import { getUserIdFromRequest } from '@/lib/auth';

export async function GET(req: NextRequest) {
  const userId = getUserIdFromRequest(req);
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const tasks = await fetchUserTasks(userId);
    return NextResponse.json(tasks);
  } catch (error) {
    console.error('Get tasks error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const userId = getUserIdFromRequest(req);
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { title, description, deadline } = await req.json();
    const taskId = await createNewTask(userId, title, description, deadline);
    return NextResponse.json({ message: 'Task created successfully', taskId }, { status: 201 });
  } catch (error) {
    if (error instanceof Error && error.message === 'Title is required') {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    console.error('Create task error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
