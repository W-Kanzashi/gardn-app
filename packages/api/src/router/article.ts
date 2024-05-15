import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import { eq, schema } from "@acme/db";

export const articleRouter = createTRPCRouter({
  list: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.article.findMany();
  }),
  create: publicProcedure.input(z.object({
    title: z.string(),
    description: z.string(),
    image_url: z.string(),
  })).mutation(({ ctx, input }) => {
    return ctx.db.insert(schema.article).values({
      price: 10,
      title: input.title,
      description: input.description,
      image_url: input.image_url,
    });
  }),

  edit: publicProcedure.input(z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    image_url: z.string(),
  })).mutation(({ ctx, input }) => {
    return ctx.db.update(schema.article).set({
      title: input.title,
      description: input.description,
      image_url: input.image_url,
    }).where(eq(schema.article.id, input.id));
  }),

  delete: protectedProcedure.input(z.object({
    id: z.string().cuid2(),
  })).mutation(() => {
    // return ctx.db.update(schema.article).set({
    //   deleted: true,
    // }).where(eq(schema.article.id, input.id));
    return true;
  }),
});
