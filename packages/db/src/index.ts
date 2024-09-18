import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";

import { credentials } from "../drizzle.config";
import * as schema from "./schema";

const connection = createClient(credentials);

export const db = drizzle(connection, { schema, logger: true });

export * from "drizzle-orm";
