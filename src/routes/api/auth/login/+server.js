import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { users } from '$lib/server/db';
import { JWT_SECRET } from '$lib/server/secrets';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
  const { username, password } = await request.json();

  if (!username || !password) {
    return new Response(JSON.stringify({ message: 'Username and password are required' }), { status: 400 });
  }

  const user = users.find(u => u.username === username);
  if (!user) {
    return new Response(JSON.stringify({ message: 'Invalid credentials' }), { status: 401 });
  }

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return new Response(JSON.stringify({ message: 'Invalid credentials' }), { status: 401 });
  }

  const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });

  return new Response(JSON.stringify({ token }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
