import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";

import * as schema from "./schema";

export * from "drizzle-orm";

const connection = createClient({
  url: process.env.DB_HOST!,
  authToken: process.env.DB_TOKEN!,
});

export const db = drizzle(connection, { schema });
