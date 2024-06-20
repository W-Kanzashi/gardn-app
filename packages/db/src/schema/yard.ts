import { relations, sql } from "drizzle-orm";
import { integer, primaryKey, text } from "drizzle-orm/sqlite-core";

import { nanoid } from "../nanoid";
import { mySqlTable } from "./_table";
import { plant } from "./plant";
import { sensor } from "./sensor";

export const yard = mySqlTable("yard", {
  id: text("id", { length: 21 })
    .primaryKey()
    .$defaultFn(() => nanoid()),
  title: text("name", { length: 256 }).notNull(),
  description: text("description", { length: 256 }).notNull(),
  image_url: text("image_url", { length: 256 }).notNull(),
  image_public_id: text("image_public_id", { length: 256 }).notNull(),
  createdAt: text("created_at")
    .default(sql`CURRENT_text`)
    .notNull(),
  updatedAt: text("updatedAt"),
});

export const yardRelations = relations(yard, ({ many }) => ({
  plants: many(yardToPlant),
  users: many(yardToUser),
  sensors: many(yardToSensor),
}));

export const yardToUser = mySqlTable(
  "yard_to_user",
  {
    yard_id: text("yard_id", { length: 21 }).notNull(),
    user_id: text("user_id").notNull(),
    favorite: integer("favorite", { mode: "boolean" }).default(false),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.yard_id, table.user_id] }),
  }),
);

export const yardToSensor = mySqlTable(
  "yard_to_sensor",
  {
    yard_id: text("yard_id", { length: 21 }).notNull(),
    sensor_id: text("sensor_id", { length: 21 }).notNull(),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.yard_id, table.sensor_id] }),
  }),
);

export const yardToSensorRelations = relations(yardToSensor, ({ one }) => ({
  yard: one(yard, {
    fields: [yardToSensor.yard_id],
    references: [yard.id],
  }),
  sensor: one(sensor, {
    fields: [yardToSensor.sensor_id],
    references: [sensor.id],
  }),
}));

export const yardToPlant = mySqlTable(
  "yard_to_user",
  {
    yard_id: text("yard_id", { length: 21 }).notNull(),
    plant_id: text("user_id").notNull(),
    favorite: integer("favorite", { mode: "boolean" }).default(false),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.yard_id, table.plant_id] }),
  }),
);

export const yardToPlantRelations = relations(yardToPlant, ({ one }) => ({
  yard: one(yard, {
    fields: [yardToPlant.yard_id],
    references: [yard.id],
  }),
  plant: one(plant, {
    fields: [yardToPlant.plant_id],
    references: [plant.id],
  }),
}));
