import type { AdapterAccountType } from "next-auth/adapters";
import { relations, sql } from "drizzle-orm";
import {
  blob,
  integer,
  primaryKey,
  sqliteTableCreator,
  text,
} from "drizzle-orm/sqlite-core";

import { nanoid } from "./nanoid";

export const sqliteTable = sqliteTableCreator((name) => `gardn_${name}`);

export const user = sqliteTable("user", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => nanoid()),
  name: text("name"),
  email: text("email").notNull(),
  emailVerified: integer("emailVerified", { mode: "timestamp_ms" }),
  image: text("image"),
});

export const user_relations = relations(user, ({ many }) => ({
  sensors: many(sensor),
  orders: many(order),
  supports: many(support_user),
}));

export const account = sqliteTable(
  "account",
  {
    userId: text("userId")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    type: text("type").$type<AdapterAccountType>().notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
  },
  (account) => ({
    compoundKey: primaryKey({
      columns: [account.provider, account.providerAccountId],
    }),
  }),
);

export const session = sqliteTable("session", {
  sessionToken: text("sessionToken").primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  expires: integer("expires", { mode: "timestamp_ms" }).notNull(),
});

export const verificationToken = sqliteTable(
  "verificationToken",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: integer("expires", { mode: "timestamp_ms" }).notNull(),
  },
  (verificationToken) => ({
    compositePk: primaryKey({
      columns: [verificationToken.identifier, verificationToken.token],
    }),
  }),
);

export const authenticator = sqliteTable(
  "authenticator",
  {
    credentialID: text("credentialID").notNull().unique(),
    userId: text("userId")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    providerAccountId: text("providerAccountId").notNull(),
    credentialPublicKey: text("credentialPublicKey").notNull(),
    counter: integer("counter").notNull(),
    credentialDeviceType: text("credentialDeviceType").notNull(),
    credentialBackedUp: integer("credentialBackedUp", {
      mode: "boolean",
    }).notNull(),
    transports: text("transports"),
  },
  (authenticator) => ({
    compositePK: primaryKey({
      columns: [authenticator.userId, authenticator.credentialID],
    }),
  }),
);

export const plant = sqliteTable("plant", {
  id: text("id", { length: 21 })
    .primaryKey()
    .$defaultFn(() => nanoid()),
  title: text("name", { length: 256 }).notNull(),
  description: text("description", { length: 256 }).notNull(),
  image_url: text("image_url", { length: 256 }).notNull(),
  deleted: integer("deleted", { mode: "boolean" }).default(false),
  category_id: text("category_id", { length: 21 }).notNull().default(""),
  created_at: integer("created_at", { mode: "timestamp" })
    .default(sql`(unixepoch())`)
    .notNull(),
  updated_at: integer("updated_at", { mode: "timestamp" }).default(
    sql`(unixepoch())`,
  ),
});

export const plant_relations = relations(plant, ({ one, many }) => ({
  users: many(plant_user),
  category: one(plant_category, {
    fields: [plant.category_id],
    references: [plant_category.id],
  }),
}));

export const plant_user = sqliteTable(
  "plant_user",
  {
    plant_id: text("plant_id", { length: 21 }).notNull(),
    user_id: text("user_id").notNull(),
    favorite: integer("favorite", { mode: "boolean" }).default(false),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.plant_id, table.user_id] }),
  }),
);

export const plant_user_relations = relations(plant_user, ({ one }) => ({
  plant: one(plant, {
    fields: [plant_user.plant_id],
    references: [plant.id],
  }),
  user: one(user, {
    fields: [plant_user.user_id],
    references: [user.id],
  }),
}));

export const plant_category = sqliteTable("plant_category", {
  id: text("id", { length: 21 })
    .primaryKey()
    .$defaultFn(() => nanoid()),
});

export const sensor = sqliteTable("sensor", {
  id: text("id", { length: 21 })
    .primaryKey()
    .$defaultFn(() => nanoid()),
  title: text("name", { length: 256 }).notNull(),
  sensor_id: text("sensor_id", { length: 21 }).notNull(),
  user_id: text("user_id", { length: 21 }).notNull(),
  created_at: integer("created_at", { mode: "timestamp" })
    .default(sql`(unixepoch())`)
    .notNull(),
  updated_at: integer("updated_at", { mode: "timestamp" }),
});

export const sensor_relations = relations(sensor, ({ one, many }) => ({
  user: one(user, {
    fields: [sensor.user_id],
    references: [user.id],
  }),
  yards: many(yard_sensor),
}));

export const yard_user = sqliteTable(
  "yard_user",
  {
    yard_id: text("yard_id", { length: 21 }).notNull(),
    user_id: text("user_id").notNull(),
    favorite: integer("favorite", { mode: "boolean" }).default(false),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.yard_id, table.user_id] }),
  }),
);

export const order = sqliteTable("order", {
  id: text("id", { length: 21 })
    .primaryKey()
    .$defaultFn(() => nanoid()),
  title: text("name", { length: 100 }).notNull(),
  more_information: text("description", { length: 256 }).notNull(),
  price: integer("price").notNull(),
  canceled: integer("canceled", { mode: "boolean" }).default(false),
  user_id: text("user_id", { length: 21 }).notNull(),
  created_at: integer("created_at", { mode: "timestamp" })
    .default(sql`(unixepoch())`)
    .notNull(),
  updated_at: integer("updated_at", { mode: "timestamp" }),
});

export const order_relations = relations(order, ({ one, many }) => ({
  user: one(user, {
    fields: [order.user_id],
    references: [user.id],
  }),
  article: many(order_article),
}));

export const order_article = sqliteTable(
  "order_article",
  {
    order_id: text("order_id", { length: 21 }).notNull(),
    article_id: text("article_id", { length: 21 }).notNull(),
    quantity: integer("quantity").notNull(),
    price: integer("price").notNull(),
  },
  (table) => ({
    pk: primaryKey({
      columns: [table.order_id, table.article_id],
    }),
  }),
);

export const order_article_relations = relations(order_article, ({ one }) => ({
  order: one(order, {
    fields: [order_article.order_id],
    references: [order.id],
  }),
  article: one(article, {
    fields: [order_article.article_id],
    references: [article.id],
  }),
}));

// Articles
export const article = sqliteTable("article", {
  id: text("id", { length: 21 })
    .primaryKey()
    .$defaultFn(() => nanoid()),
  name: text("name", { length: 100 }).notNull(),
  description: text("description", { length: 256 }).notNull(),
  price: integer("price").notNull(),
  image_url: text("image_url", { length: 256 }).notNull(),
  active: integer("active", { mode: "boolean" }).default(false),
  stock: integer("stock").default(0),
  option: text("option", { mode: "json" }).$type<
    {
      option_id: string;
      name: string;
      price: number;
      stock: number;
      available: boolean;
    }[]
  >(),
  category_id: text("category_id", { length: 21 }).notNull(),
  created_at: integer("created_at", { mode: "timestamp" })
    .default(sql`(unixepoch())`)
    .notNull(),
  updated_at: integer("updated_at", { mode: "timestamp" }),
});

export const article_relations = relations(article, ({ one }) => ({
  category: one(article_category, {
    fields: [article.category_id],
    references: [article_category.id],
  }),
}));

export const article_category = sqliteTable("category", {
  id: text("id", { length: 21 })
    .primaryKey()
    .$defaultFn(() => nanoid()),
  title: text("name", { length: 100 }).notNull(),
  description: text("description", { length: 256 }).notNull(),
  created_at: integer("created_at", { mode: "timestamp" })
    .default(sql`(unixepoch())`)
    .notNull(),
  updated_at: integer("updated_at", { mode: "timestamp" }),
});

export const category_relations = relations(article_category, ({ many }) => ({
  articles: many(article),
}));

// Support for order
export const support = sqliteTable("support", {
  id: text("id", { length: 21 })
    .primaryKey()
    .$defaultFn(() => nanoid()),
  title: text("name", { length: 100 }).notNull(),
  ticket_id: text("ticket_id", { length: 21 }).notNull(),
  chat: blob("chat")
    .$type<
      Record<
        string,
        {
          message: string;
          createdAt: string;
        }
      >
    >()
    .notNull(),
  created_at: integer("created_at", { mode: "timestamp" })
    .default(sql`(unixepoch())`)
    .notNull(),
  updated_at: integer("updated_at", { mode: "timestamp" }),
});

export const support_user = sqliteTable(
  "support_user",
  {
    support_id: text("support_id", { length: 21 }).notNull(),
    user_id: text("user_id").notNull(),
  },
  (table) => ({
    pk: primaryKey({
      columns: [table.support_id, table.user_id],
    }),
  }),
);

export const support_relations = relations(support_user, ({ one }) => ({
  users: one(user, {
    fields: [support_user.user_id],
    references: [user.id],
  }),
  supports: one(support, {
    fields: [support_user.support_id],
    references: [support.id],
  }),
}));

export const yard = sqliteTable("yard", {
  id: text("id", { length: 21 })
    .primaryKey()
    .$defaultFn(() => nanoid()),
  title: text("name", { length: 256 }).notNull(),
  description: text("description", { length: 256 }).notNull(),
  image_url: text("image_url", { length: 256 }).notNull(),
  image_public_id: text("image_public_id", { length: 256 }).notNull(),
  created_at: integer("created_at", { mode: "timestamp" })
    .default(sql`(unixepoch())`)
    .notNull(),
  updated_at: integer("updated_at", { mode: "timestamp" }),
});

export const yard_relations = relations(yard, ({ many }) => ({
  plants: many(yard_plant),
  users: many(yard_user),
  sensors: many(yard_sensor),
}));

export const yard_sensor = sqliteTable(
  "yard_sensor",
  {
    yard_id: text("yard_id", { length: 21 }).notNull(),
    sensor_id: text("sensor_id", { length: 21 }).notNull(),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.yard_id, table.sensor_id] }),
  }),
);

export const yard_sensor_relations = relations(yard_sensor, ({ one }) => ({
  yard: one(yard, {
    fields: [yard_sensor.yard_id],
    references: [yard.id],
  }),
  sensor: one(sensor, {
    fields: [yard_sensor.sensor_id],
    references: [sensor.id],
  }),
}));

export const yard_plant = sqliteTable(
  "yard_user",
  {
    yard_id: text("yard_id", { length: 21 }).notNull(),
    plant_id: text("user_id").notNull(),
    favorite: integer("favorite", { mode: "boolean" }).default(false),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.yard_id, table.plant_id] }),
  }),
);

export const yard_plant_relations = relations(yard_plant, ({ one }) => ({
  yard: one(yard, {
    fields: [yard_plant.yard_id],
    references: [yard.id],
  }),
  plant: one(plant, {
    fields: [yard_plant.plant_id],
    references: [plant.id],
  }),
}));

// Expo UI
export const ui = sqliteTable("ui", {
  id: text("id", { length: 21 })
    .primaryKey()
    .$defaultFn(() => nanoid()),
  page: text("page", { length: 256 }).notNull(),
  ui: text("ui", { mode: "json" }).notNull(),
  type: text("type", { enum: ["layout", "page"] }).notNull(),
  etag: text("etag", { length: 21 }).notNull(),
  created_at: integer("created_at", { mode: "timestamp" })
    .default(sql`(unixepoch())`)
    .notNull(),
  updated_at: integer("updated_at", { mode: "timestamp" }),
});
