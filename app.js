// deno-lint-ignore-file
import { Hono } from "https://deno.land/x/hono@v4.3.11/mod.ts";
import { registerUser } from "./routes/register.js";
import { loginUser } from "./routes/login.js";
import { serveStatic } from "https://deno.land/x/hono@v4.3.11/middleware.ts";
import client from "./db/db.js";
import * as bcrypt from "https://deno.land/x/bcrypt@v0.4.1/mod.ts";

const app = new Hono();

// Middleware to set security headers globally
app.use('*', async (c, next) => {
  try {
    c.header('Content-Type', 'text/html');

    // Content Security Policy (CSP)
    c.header(
      'Content-Security-Policy',
      "default-src 'self'; " +
      "script-src 'self'; " +
      "style-src 'self'; " +
      "img-src 'self'; " +
      "frame-ancestors 'none'; " +
      "form-action 'self';"
    );

    c.header('X-Frame-Options', 'DENY');
    c.header('X-Content-Type-Options', 'nosniff');
    return await next();
  } catch (error) {
    console.error('Middleware error:', error);
    return c.text('Server error while setting headers', 500);
  }
});

// Serve static files from the /static directory
app.use('/static/*', serveStatic({ root: '.' }));

// Serve the index page
app.get('/', async (c) => {
  try {
    const content = await Deno.readTextFile('./views/index.html');
    return c.html(content);
  } catch (error) {
    console.error('Error reading index.html:', error);
    return c.text('Failed to load index page', 500);
  }
});

// Serve the registration page
app.get('/register', async (c) => {
  try {
    const content = await Deno.readTextFile('./views/register.html');
    return c.html(content);
  } catch (error) {
    console.error('Error reading register.html:', error);
    return c.text('Failed to load register page', 500);
  }
});

// Handle user registration
app.post('/register', async (c) => {
  try {
    const body = await c.req.parseBody();
    const { username, password, birthdate, role } = body || {};

    if (!username || !password || !birthdate || !role) {
      return c.text('All fields are required', 400);
    }

    const hashedPassword = await bcrypt.hash(password);

    await client.queryArray(
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

// Serve the login page
app.get('/login', async (c) => {
  try {
    const content = await Deno.readTextFile('./views/login.html');
    return c.html(content);
  } catch (error) {
    console.error('Error reading login.html:', error);
    return c.text('Failed to load login page', 500);
  }
});

// Handle user login
app.post('/login', loginUser);

// Start the server
console.log('Server running on http://localhost:3000');
Deno.serve(app.fetch);
