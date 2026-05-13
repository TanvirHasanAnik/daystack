import { pool } from '@/lib/db';
import bcrypt from 'bcryptjs';
import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';

export interface User {
  id: number;
  name: string;
  email: string;
  password_hash: string;
  role: 'user' | 'admin';
  created_at: Date;
}

export async function createUser(name: string, email: string, password: string, role: 'user' | 'admin' = 'user'): Promise<number> {
  const hash = await bcrypt.hash(password, 10);

  const [result] = await pool.query<ResultSetHeader>(
    'INSERT INTO users (name, email, password_hash, role) VALUES (?, ?, ?, ?)',
    [name, email, hash, role]
  );

  return result.insertId; 
}

export async function getUserByEmail(email: string): Promise<User | null> {
  const [rows] = await pool.query<RowDataPacket[]>(
    'SELECT * FROM users WHERE email = ?',
    [email]
  );
  return rows[0] as User || null;
}

export async function getUserById(id: number): Promise<User | null> {
  const [rows] = await pool.query<RowDataPacket[]>(
    'SELECT * FROM users WHERE id = ?',
    [id]
  );
  return rows[0] as User || null;
}

export async function deleteUser(id: number): Promise<boolean> {
  const [result] = await pool.query<ResultSetHeader>(
    'DELETE FROM users WHERE id = ?',
    [id]
  );
  return result.affectedRows > 0;
}
