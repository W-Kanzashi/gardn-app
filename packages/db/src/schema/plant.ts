import { relations, sql } from "drizzle-orm";
import {
  boolean,
  primaryKey,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";

import { createId } from "@paralleldrive/cuid2";

import { mySqlTable } from "./_table";
import { users } from "./auth";

export const plant = mySqlTable("plant", {
  id: varchar("id", { length: 30 }).primaryKey().$defaultFn(() => createId()),
  title: varchar("name", { length: 256 }).notNull(),
  description: varchar("description", { length: 256 }).notNull(),
  image_url: varchar("image_url", { length: 256 }).notNull(),
  deleted: boolean("deleted").default(false),
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updatedAt").onUpdateNow(),
});

export const plantRelations = relations(plant, ({ many }) => ({
  users: many(plantToUser),
}));

export const plantToUser = mySqlTable("plant_to_user", {
  plant_id: varchar("plant_id", { length: 30 }).notNull(),
  user_id: varchar("user_id", { length: 255 }).notNull(),
  favorite: boolean("favorite").default(false),
}, (table) => ({
  pk: primaryKey({ columns: [table.plant_id, table.user_id] }),
}));

export const plantToUserRelations = relations(plantToUser, ({ one }) => ({
  plant: one(plant, {
    fields: [plantToUser.plant_id],
    references: [plant.id],
  }),
  user: one(users, {
    fields: [plantToUser.user_id],
    references: [users.id],
  }),
}));
