import { relations, sql } from "drizzle-orm";
import {
  boolean,
  primaryKey,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";

import { createId } from "@paralleldrive/cuid2";

import { mySqlTable } from "./_table";
import { yardToSensor } from "./yard";

export const sensor = mySqlTable("sensor", {
  id: varchar("id", { length: 30 }).primaryKey().$defaultFn(() => createId()),
  title: varchar("name", { length: 256 }).notNull(),
  sensor_id: varchar("sensor_id", { length: 30 }).notNull(),
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updatedAt").onUpdateNow(),
});

export const sensorRelations = relations(sensor, ({ many }) => ({
  users: many(yardToUser),
  yards: many(yardToSensor),
}));

export const yardToUser = mySqlTable("yard_to_user", {
  yard_id: varchar("yardId", { length: 30 }).notNull(),
  user_id: varchar("userId", { length: 30 }).notNull(),
  favorite: boolean("favorite").default(false),
}, (table) => ({
  pk_yard_to_user: primaryKey({ columns: [table.yard_id, table.user_id] }),
}));
