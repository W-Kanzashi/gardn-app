import { openDatabaseSync } from "expo-sqlite/next";
import { drizzle } from "drizzle-orm/expo-sqlite";

import * as schema from "./schema";

const expo = openDatabaseSync("gardn.db", { enableChangeListener: true });

export const db = drizzle(expo, { schema, logger: true });
