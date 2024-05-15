import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import { eq, schema } from "@acme/db";

export const plantRouter = createTRPCRouter({
  list: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.plant.findMany();
  }),
  create: publicProcedure.input(z.object({
    title: z.string(),
    description: z.string(),
    image_url: z.string(),
  })).mutation(({ ctx, input }) => {
    return ctx.db.insert(schema.plant).values({
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
    return ctx.db.update(schema.plant).set({
      title: input.title,
      description: input.description,
      image_url: input.image_url,
    }).where(eq(schema.plant.id, input.id));
  }),

  delete: protectedProcedure.input(z.object({
    id: z.string().cuid2(),
  })).mutation(({ ctx, input }) => {
    return ctx.db.update(schema.plant).set({
      deleted: true,
    }).where(eq(schema.plant.id, input.id));
  }),
});
