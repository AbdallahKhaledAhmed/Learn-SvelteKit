import bcrypt from 'bcryptjs';
import { users } from '$lib/server/db';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
  const { username, password } = await request.json();

  if (!username || !password) {
    return new Response(JSON.stringify({ message: 'Username and password are required' }), { status: 400 });
  }

  const userExists = users.find(u => u.username === username);
  if (userExists) {
    return new Response(JSON.stringify({ message: 'User already exists' }), { status: 409 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = { id: users.length + 1, username, password: hashedPassword };
  users.push(newUser);

  return new Response(JSON.stringify({ message: 'User created successfully' }), { status: 201 });
}
