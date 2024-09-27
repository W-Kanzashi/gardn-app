import { z } from "zod";

import { eq } from "@acme/db";
import { article, article_category } from "@acme/db/schema";

import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const articleRouter = createTRPCRouter({
  list: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.article.findMany();
  }),

  create: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        description: z.string(),
        image_url: z.string().nullish(),
        price: z.string().transform((price) => parseFloat(price) * 100),
        stock: z.string().transform((stock) => parseInt(stock)),
        active: z.boolean(),
        category_id: z.string().nanoid(),
        option: z.array(
          z.object({
            option_id: z.string().nanoid(),
            name: z.string(),
            available: z.boolean(),
            price: z.string().transform((price) => parseFloat(price) * 100),
            stock: z.string().transform((stock) => parseInt(stock)),
          }),
        ),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.db
        .insert(article)
        .values({
          name: input.name,
          description: input.description,
          price: input.price,
          image_url: input.image_url ?? "",
          active: input.active,
          stock: input.stock,
          category_id: input.category_id,
          option: input.option.map((option) => ({
            option_id: option.option_id,
            name: option.name,
            available: option.available,
            price: option.price,
            stock: option.stock,
          })),
        })
        .returning({ id: article.id });
    }),

  edit: publicProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string(),
        description: z.string(),
        image_url: z.string().nullish(),
        active: z.boolean(),
        stock: z.string().transform((stock) => parseInt(stock)),
        price: z.string().transform((price) => parseFloat(price) * 100),
        category_id: z.string().nanoid(),
        option: z.array(
          z.object({
            option_id: z.string().nanoid(),
            name: z.string(),
            available: z.boolean(),
            price: z.string().transform((price) => parseFloat(price) * 100),
            stock: z.string().transform((stock) => parseInt(stock)),
          }),
        ),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.db
        .update(article)
        .set({
          name: input.name,
          description: input.description,
          active: input.active,
          image_url: input.image_url ?? "",
        })
        .where(eq(article.id, input.id));
    }),

  delete: protectedProcedure
    .input(
      z.object({
        id: z.string().cuid2(),
      }),
    )
    .mutation(() => {
      // return ctx.db.update(schema.article).set({
      //   deleted: true,
      // }).where(eq(schema.article.id, input.id));
      return true;
    }),

  // categories
  create_categories: publicProcedure
    .input(
      z.object({
        title: z.string(),
        description: z.string(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.db.insert(article_category).values({
        title: input.title,
        description: input.description,
      });
    }),
});
