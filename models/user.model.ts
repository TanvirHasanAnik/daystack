import { pool } from '@/lib/db';
import bcrypt from 'bcryptjs';
import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';

export interface User {
  id: number;
  email: string;
  password_hash: string;
  created_at: Date;
}

export async function createUser(email: string, password: string): Promise<number> {
  const hash = await bcrypt.hash(password, 10);

  const [result] = await pool.query<ResultSetHeader>(
    'INSERT INTO users (email, password_hash) VALUES (?, ?)',
    [email, hash]
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
