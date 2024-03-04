import { connect } from "@planetscale/database";
import { drizzle } from "drizzle-orm/planetscale-serverless";

import * as auth from "./schema/auth";
import * as plant from "./schema/plant";
import * as sensor from "./schema/sensor";
import * as shop from "./schema/shop";
import * as yard from "./schema/yard";

export const schema = { ...auth, ...plant, ...sensor, ...shop, ...yard };

export { mySqlTable as tableCreator } from "./schema/_table";

export * from "drizzle-orm";

const connection = connect({
  host: process.env.DB_HOST!,
  username: process.env.DB_USERNAME!,
  password: process.env.DB_PASSWORD!,
});

export const db = drizzle(connection, { schema });
