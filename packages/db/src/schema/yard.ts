import { relations, sql } from "drizzle-orm";
import {
  boolean,
  primaryKey,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";

import { createId } from "@paralleldrive/cuid2";

import { mySqlTable } from "./_table";
import { plant } from "./plant";
import { sensor } from "./sensor";

export const yard = mySqlTable("yard", {
  id: varchar("id", { length: 30 }).primaryKey().$defaultFn(() => createId()),
  title: varchar("name", { length: 256 }).notNull(),
  description: varchar("description", { length: 256 }).notNull(),
  image_url: varchar("image_url", { length: 256 }).notNull(),
  image_public_id: varchar("image_public_id", { length: 256 }).notNull(),
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updatedAt").onUpdateNow(),
});

export const yardRelations = relations(yard, ({ many }) => ({
  plants: many(yardToPlant),
  users: many(yardToUser),
  sensors: many(yardToSensor),
}));

export const yardToUser = mySqlTable("yard_to_user", {
  yard_id: varchar("yard_id", { length: 30 }).notNull(),
  user_id: varchar("user_id", { length: 30 }).notNull(),
  favorite: boolean("favorite").default(false),
}, (table) => ({
  pk: primaryKey({ columns: [table.yard_id, table.user_id] }),
}));

export const yardToSensor = mySqlTable("yard_to_sensor", {
  yard_id: varchar("yard_id", { length: 30 }).notNull(),
  sensor_id: varchar("sensor_id", { length: 30 }).notNull(),
}, (table) => ({
  pk: primaryKey({ columns: [table.yard_id, table.sensor_id] }),
}));

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

export const yardToPlant = mySqlTable("yard_to_user", {
  yard_id: varchar("yard_id", { length: 30 }).notNull(),
  plant_id: varchar("user_id", { length: 30 }).notNull(),
  favorite: boolean("favorite").default(false),
}, (table) => ({
  pk: primaryKey({ columns: [table.yard_id, table.plant_id] }),
}));

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
