import { Client } from "https://deno.land/x/postgres@v0.19.3/mod.ts";

// Set up PostgreSQL client connection
const client = new Client({
  user: "postgres",
  database: "postgres",
  hostname: "localhost",
  password: "12345!",
  port: 5432,
});

await client.connect();

export default client;