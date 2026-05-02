import { NextRequest } from 'next/server';
import { verifyToken } from '@/lib/jwt';

export function getUserIdFromRequest(req: NextRequest): number | null {
  const token = req.cookies.get('token')?.value;
  if (!token) return null;

  const payload = verifyToken(token);
  return payload ? payload.id : null;
}
