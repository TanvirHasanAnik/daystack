import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/controllers/user.controller';
import { getUserIdFromRequest } from '@/lib/auth';

export async function GET(req: NextRequest) {
  const userId = getUserIdFromRequest(req);
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const user = await getCurrentUser(userId);
    return NextResponse.json(user);
  } catch (error) {
    if (error instanceof Error && error.message === 'User not found') {
      return NextResponse.json({ error: error.message }, { status: 404 });
    }
    console.error('Get user me error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
