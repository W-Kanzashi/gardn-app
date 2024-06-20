import { relations, sql } from "drizzle-orm";
import { integer, primaryKey, text } from "drizzle-orm/sqlite-core";

import { nanoid } from "../nanoid";
import { mySqlTable } from "./_table";
import { yardToSensor } from "./yard";

export const sensor = mySqlTable("sensor", {
  id: text("id", { length: 21 })
    .primaryKey()
    .$defaultFn(() => nanoid()),
  title: text("name", { length: 256 }).notNull(),
  sensor_id: text("sensor_id", { length: 21 }).notNull(),
  createdAt: text("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: text("updatedAt"),
});

export const sensorRelations = relations(sensor, ({ many }) => ({
  users: many(yardToUser),
  yards: many(yardToSensor),
}));

export const yardToUser = mySqlTable(
  "yard_to_user",
  {
    yard_id: text("yardId", { length: 21 }).notNull(),
    user_id: text("userId").notNull(),
    favorite: integer("favorite", { mode: "boolean" }).default(false),
  },
  (table) => ({
    pk_yard_to_user: primaryKey({ columns: [table.yard_id, table.user_id] }),
  }),
);
