import { a, b, c, d, db } from "./server/db";

const fn = async () => {
  const tables = [a, b, c, d].sort(() => Math.random() - 0.5).slice(0, 2);
  for (const table of tables) {
    await db.insert(table).values({
      field1: Math.random() > 0.5,
      field2: Math.random() > 0.5,
      field3: Math.random() > 0.5,
    });
  }
};

setInterval(fn, 10000);

fn();
