import { NextRequest, NextResponse } from 'next/server';
import { loginUser } from '@/lib/controllers/user.controller';

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }

    const { token } = await loginUser(email, password);

    const response = NextResponse.json({ message: 'Login successful' }, { status: 200 });
    response.cookies.set('auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    });

    return response;
  } catch (error) {
    if (error instanceof Error && error.message === 'Invalid credentials') {
      return NextResponse.json({ error: error.message }, { status: 401 });
    }
    console.error('Login error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
