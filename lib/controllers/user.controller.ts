import { createUser, getUserByEmail, getUserById } from '@/models/user.model';
import { signToken } from '@/lib/jwt';
import bcrypt from 'bcryptjs';

export async function registerUser(name: string, email: string, password: string) {
  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    throw new Error('User already exists');
  }

  const userId = await createUser(name, email, password);
  const token = signToken({ id: userId });

  return { userId, token };
}

export async function loginUser(email: string, password: string) {
  const user = await getUserByEmail(email);
  if (!user) {
    throw new Error('Invalid credentials');
  }

  const isPasswordValid = await bcrypt.compare(password, user.password_hash);
  if (!isPasswordValid) {
    throw new Error('Invalid credentials');
  }

  const token = signToken({ id: user.id });

  return { token };
}

export async function getCurrentUser(userId: number) {
  const user = await getUserById(userId);
  if (!user) {
    throw new Error('User not found');
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { password_hash, ...userWithoutPassword } = user;
  return userWithoutPassword;
}
