import { env } from "@/env";
import { drizzle } from "drizzle-orm/node-postgres";
import { boolean, pgTable, serial } from "drizzle-orm/pg-core";
import pg from "pg";

export const a = pgTable("a", {
  id: serial().primaryKey(),
  field1: boolean().default(false).notNull(),
  field2: boolean().default(false).notNull(),
  field3: boolean().default(false).notNull(),
});

export const b = pgTable("b", {
  id: serial().primaryKey(),
  field1: boolean().default(false).notNull(),
  field2: boolean().default(false).notNull(),
  field3: boolean().default(false).notNull(),
});

export const c = pgTable("c", {
  id: serial().primaryKey(),
  field1: boolean().default(false).notNull(),
  field2: boolean().default(false).notNull(),
  field3: boolean().default(false).notNull(),
});

export const d = pgTable("d", {
  id: serial().primaryKey(),
  field1: boolean().default(false).notNull(),
  field2: boolean().default(false).notNull(),
  field3: boolean().default(false).notNull(),
});

const client = new pg.Pool({
  connectionString: env.POSTGRES_URL,
});

export const db = drizzle(client, {
  schema: {
    a,
    b,
    c,
    d,
  },
});

export type DB = typeof db;
