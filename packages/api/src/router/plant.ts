import { z } from "zod";

import { eq } from "@acme/db";
import * as schema from "@acme/db/schema";

import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const plantRouter = createTRPCRouter({
  byId: publicProcedure
    .input(z.object({ id: z.string().nanoid() }))
    .query(({ ctx, input }) => {
      return ctx.db.query.plant.findFirst({
        where: eq(schema.plant.id, input.id),
        columns: {
          updated_at: false,
          deleted: false,
        },
      });
    }),

  list: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.plant.findMany({
      columns: {
        id: true,
        title: true,
      },
    });
  }),

  create: publicProcedure
    .input(
      z.object({
        title: z.string(),
        description: z.string(),
        category: z.string(),
        image_url: z.string().nullish(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.db.insert(schema.plant).values({
        title: input.title,
        description: input.description,
        category_id: input.category,
        image_url: input.image_url ?? "",
      });
    }),

  edit: publicProcedure
    .input(
      z.object({
        id: z.string(),
        title: z.string(),
        description: z.string(),
        image_url: z.string(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.db
        .update(schema.plant)
        .set({
          title: input.title,
          description: input.description,
          image_url: input.image_url,
        })
        .where(eq(schema.plant.id, input.id));
    }),

  delete: protectedProcedure
    .input(
      z.object({
        id: z.string().cuid2(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.db
        .update(schema.plant)
        .set({
          deleted: true,
        })
        .where(eq(schema.plant.id, input.id));
    }),
});
