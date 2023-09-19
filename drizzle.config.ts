import type { Config } from 'drizzle-kit';

if (process.env.DATABASE_URL == null) {
  throw new Error('DATABASE_URL is missing');
}

export default {
  schema: './src/db/schema.ts',
  out: './src/db/migrations',
  driver: 'mysql2',
  dbCredentials: {
    connectionString: String(process.env.DATABASE_URL),
  },
} satisfies Config;
