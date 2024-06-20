import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";

import * as auth from "./schema/auth";
import * as plant from "./schema/plant";
import * as sensor from "./schema/sensor";
import * as shop from "./schema/shop";
import * as yard from "./schema/yard";

export const schema = { ...auth, ...plant, ...sensor, ...shop, ...yard };

export { mySqlTable as tableCreator } from "./schema/_table";

export * from "drizzle-orm";

const connection = createClient({
  url: process.env.DB_HOST!,
  authToken: process.env.DB_TOKEN!,
});

export const db = drizzle(connection, { schema });
