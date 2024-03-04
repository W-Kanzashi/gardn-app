import { relations, sql } from "drizzle-orm";
import {
  boolean,
  json,
  primaryKey,
  smallint,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";

import { createId } from "@paralleldrive/cuid2";

import { mySqlTable } from "./_table";

export const order = mySqlTable("order", {
  id: varchar("id", { length: 30 }).primaryKey().$defaultFn(() => createId()),
  title: varchar("name", { length: 100 }).notNull(),
  more_information: varchar("description", { length: 256 }).notNull(),
  price: smallint("price").notNull(),
  canceled: boolean("canceled").default(false),
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updatedAt").onUpdateNow(),
});

export const orderRelations = relations(order, ({ many }) => ({
  users: many(orderToUser),
  articles: many(orderToarticle),
}));

export const orderToUser = mySqlTable("order_to_user", {
  order_id: varchar("order_id", { length: 30 }).notNull(),
  user_id: varchar("user_id", { length: 30 }).notNull(),
  favorite: boolean("favorite").default(false),
}, (table) => ({
  pk: primaryKey({ columns: [table.order_id, table.user_id] }),
}));

export const orderToarticle = mySqlTable("order_to_article", {
  order_id: varchar("order_id", { length: 30 }).notNull(),
  article_id: varchar("article_id", { length: 30 }).notNull(),
  quantity: smallint("quantity").notNull(),
}, (table) => ({
  pk: primaryKey({
    columns: [table.order_id, table.article_id],
  }),
}));

export const orderToarticleRelations = relations(orderToarticle, ({ one }) => ({
  order: one(order, {
    fields: [orderToarticle.order_id],
    references: [order.id],
  }),
  article: one(article, {
    fields: [orderToarticle.article_id],
    references: [article.id],
  }),
}));

// Articles
export const article = mySqlTable("article", {
  id: varchar("id", { length: 30 }).primaryKey().$defaultFn(() => createId()),
  title: varchar("name", { length: 100 }).notNull(),
  description: varchar("description", { length: 256 }).notNull(),
  image_url: varchar("image_url", { length: 256 }).notNull(),
  image_public_id: varchar("image_public_id", { length: 256 }).notNull(),
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updatedAt").onUpdateNow(),
});

export const articleRelations = relations(article, ({ many }) => ({
  orders: many(orderToarticle),
  shops: many(articleToShop),
}));

export const articleToShop = mySqlTable("article_to_shop", {
  article_id: varchar("articleId", { length: 30 }).notNull(),
  shop_id: varchar("shopId", { length: 30 }).notNull(),
}, (table) => ({
  pk: primaryKey({
    columns: [table.article_id, table.shop_id],
  }),
}));

export const shop = mySqlTable("shop", {
  id: varchar("id", { length: 30 }).primaryKey().$defaultFn(() => createId()),
  title: varchar("name", { length: 100 }).notNull(),
  description: varchar("description", { length: 256 }).notNull(),
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updatedAt").onUpdateNow(),
});

export const shopRelations = relations(shop, ({ many }) => ({
  articles: many(articleToShop),
}));

// Support for shop
export const support = mySqlTable("support", {
  id: varchar("id", { length: 30 }).primaryKey().$defaultFn(() => createId()),
  title: varchar("name", { length: 100 }).notNull(),
  ticket_id: varchar("ticket_id", { length: 30 }).notNull(),
  chat: json("chat").$type<
    Record<string, {
      message: string;
      createdAt: string;
    }>
  >().notNull(),
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updatedAt").onUpdateNow(),
});

export const supportToUser = mySqlTable("support_to_user", {
  support_id: varchar("support_id", { length: 30 }).notNull(),
  user_id: varchar("user_id", { length: 30 }).notNull(),
}, (table) => ({
  pk: primaryKey({
    columns: [table.support_id, table.user_id],
  }),
}));

export const supportRelations = relations(support, ({ many }) => ({
  users: many(supportToUser),
}));
