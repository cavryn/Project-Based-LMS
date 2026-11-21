import { defineConfig } from '@mikro-orm/postgresql';
import { Migrator } from '@mikro-orm/migrations';
import * as dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  clientUrl: process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/pbl_lms',
  entities: ['./dist/**/*.entity.js'],
  entitiesTs: ['./src/**/*.entity.ts'],
  extensions: [Migrator],
  migrations: {
    path: './dist/database/migrations',
    pathTs: './src/database/migrations',
  },
  debug: process.env.NODE_ENV !== 'production',
});
