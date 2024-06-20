import { relations, sql } from "drizzle-orm";
import { blob, integer, primaryKey, text } from "drizzle-orm/sqlite-core";

import { nanoid } from "../nanoid";
import { mySqlTable } from "./_table";

export const order = mySqlTable("order", {
  id: text("id", { length: 21 })
    .primaryKey()
    .$defaultFn(() => nanoid()),
  title: text("name", { length: 100 }).notNull(),
  more_information: text("description", { length: 256 }).notNull(),
  price: integer("price").notNull(),
  canceled: integer("canceled", { mode: "boolean" }).default(false),
  createdAt: text("created_at")
    .default(sql`CURRENT_text`)
    .notNull(),
  updatedAt: text("updatedAt"),
});

export const orderRelations = relations(order, ({ many }) => ({
  users: many(orderToUser),
  articles: many(orderToarticle),
}));

export const orderToUser = mySqlTable(
  "order_to_user",
  {
    order_id: text("order_id", { length: 21 }).notNull(),
    user_id: text("user_id").notNull(),
    favorite: integer("favorite", { mode: "boolean" }).default(false),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.order_id, table.user_id] }),
  }),
);

export const orderToarticle = mySqlTable(
  "order_to_article",
  {
    order_id: text("order_id", { length: 21 }).notNull(),
    article_id: text("article_id", { length: 21 }).notNull(),
    quantity: integer("quantity").notNull(),
  },
  (table) => ({
    pk: primaryKey({
      columns: [table.order_id, table.article_id],
    }),
  }),
);

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
  id: text("id", { length: 21 })
    .primaryKey()
    .$defaultFn(() => nanoid()),
  title: text("name", { length: 100 }).notNull(),
  description: text("description", { length: 256 }).notNull(),
  price: integer("price").notNull(),
  sub_articles: blob("sub_articles").$type<
    {
      id: string;
      name: string;
      price: number;
    }[]
  >(),
  image_url: text("image_url", { length: 256 }).notNull(),
  createdAt: text("created_at")
    .default(sql`CURRENT_text`)
    .notNull(),
  updatedAt: text("updatedAt"),
});

export const articleRelations = relations(article, ({ many }) => ({
  orders: many(orderToarticle),
  shops: many(articleToShop),
}));

export const articleToShop = mySqlTable(
  "article_to_shop",
  {
    article_id: text("articleId", { length: 21 }).notNull(),
    shop_id: text("shopId", { length: 21 }).notNull(),
  },
  (table) => ({
    pk: primaryKey({
      columns: [table.article_id, table.shop_id],
    }),
  }),
);

export const shop = mySqlTable("shop", {
  id: text("id", { length: 21 })
    .primaryKey()
    .$defaultFn(() => nanoid()),
  title: text("name", { length: 100 }).notNull(),
  description: text("description", { length: 256 }).notNull(),
  createdAt: text("created_at")
    .default(sql`CURRENT_text`)
    .notNull(),
  updatedAt: text("updatedAt"),
});

export const shopRelations = relations(shop, ({ many }) => ({
  articles: many(articleToShop),
}));

// Support for shop
export const support = mySqlTable("support", {
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
  createdAt: text("created_at")
    .default(sql`CURRENT_text`)
    .notNull(),
  updatedAt: text("updatedAt"),
});

export const supportToUser = mySqlTable(
  "support_to_user",
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

export const supportRelations = relations(support, ({ many }) => ({
  users: many(supportToUser),
}));
