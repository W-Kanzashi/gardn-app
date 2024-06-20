import { relations, sql } from "drizzle-orm";
import { integer, primaryKey, text } from "drizzle-orm/sqlite-core";

import { nanoid } from "../nanoid";
import { mySqlTable } from "./_table";
import { users } from "./auth";

export const plant = mySqlTable("plant", {
  id: text("id", { length: 21 })
    .primaryKey()
    .$defaultFn(() => nanoid()),
  title: text("name", { length: 256 }).notNull(),
  description: text("description", { length: 256 }).notNull(),
  image_url: text("image_url", { length: 256 }).notNull(),
  deleted: integer("deleted", { mode: "boolean" }).default(false),
  category_id: text("category_id", { length: 21 }).notNull().default(""),
  createdAt: text("created_at")
    .default(sql`(CURRENT_TIMESTAMP)`)
    .notNull(),
  updatedAt: text("updatedAt").$default(() => sql`(CURRENT_TIMESTAMP)`),
});

export const plant_relations = relations(plant, ({ one, many }) => ({
  users: many(plant_to_user),
  category: one(plant_category, {
    fields: [plant.category_id],
    references: [plant_category.id],
  }),
}));

export const plant_to_user = mySqlTable(
  "plant_to_user",
  {
    plant_id: text("plant_id", { length: 21 }).notNull(),
    user_id: text("user_id").notNull(),
    favorite: integer("favorite", { mode: "boolean" }).default(false),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.plant_id, table.user_id] }),
  }),
);

export const plant_to_user_relations = relations(plant_to_user, ({ one }) => ({
  plant: one(plant, {
    fields: [plant_to_user.plant_id],
    references: [plant.id],
  }),
  user: one(users, {
    fields: [plant_to_user.user_id],
    references: [users.id],
  }),
}));

export const plant_category = mySqlTable("plant_category", {
  id: text("id", { length: 21 })
    .primaryKey()
    .$defaultFn(() => nanoid()),
});
