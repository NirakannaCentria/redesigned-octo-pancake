// deno-lint-ignore-file
import { Hono } from "https://deno.land/x/hono@v4.3.11/mod.ts";
import { registerUser } from "./routes/register.js"
import { serveStatic } from "https://deno.land/x/hono@v4.3.11/middleware.ts";
import client from "./db/db.js";

// Create the Hono app


const app = new Hono();
// Serve static files from the /static directory
app.use('/static/*', serveStatic({ root: '.' }));



app.get('/register', async (c) => {
  return c.html(await Deno.readTextFile('./views/register.html'));
});

app.post('/register', async (c) => {
  const body = await c.req.parseBody();
  const username = body.username;
  const password = body.password;
  const birthdate = body.birthdate;
  const role = body.role;

  console.log('Username:', username);
  console.log('Password:', password);
  console.log('Birthdate:', birthdate);
  console.log('Role:', role);

  try {
    if (!username || !password || !birthdate || !role) {
      return c.text('All fields are required', 400);
    }

    const hashedPassword = await bcrypt.hash(password);

    // Corrected query
    const result = await client.queryArray(
      `INSERT INTO zephyr_users (username, password_hash, role, birthdate)
       VALUES ($1, $2, $3, $4)`,
      [username, hashedPassword, role, birthdate]
    );

    return c.text('User registered successfully!');
  } catch (error) {
    console.error('Registration error:', error);

    if (error.message.includes('duplicate key value')) {
      return c.text('Username is already taken', 400);
    }

    return c.text('Error during registration', 500);
  }
});

console.log('Server running on http://localhost:3000');
Deno.serve(app.fetch);
