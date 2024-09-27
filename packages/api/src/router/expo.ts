import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";
import { ui } from "./_utils/ui";
import { navBar } from "./_utils/ui/nav-bar";
import { plant_1 } from "./_utils/ui/plant/id";
import { shop } from "./_utils/ui/shop";

export const expoRouter = createTRPCRouter({
  getByPage: publicProcedure
    .input(
      z.object({
        page: z.string(),
        etag: z.string().nullish(),
        type: z.enum(["layout", "page"]),
      }),
    )
    .query(({ input }) => {
      // Check in the db if the page exists
      // If it does, check if the etag is the same
      // If it is, return null
      // If it isn't, return the new ui

      try {
        // const pageData = await ctx.db.query.ui.findFirst({
        //   where: and(
        //     eq(schema.ui.type, input.type),
        //     eq(schema.ui.page, input.page),
        //   ),
        //   columns: {
        //     id: true,
        //     etag: true,
        //     ui: true,
        //     type: true,
        //     updated_at: true,
        //   },
        // });

        // if (!pageData) {
        // await ctx.db.insert(schema.ui).values({
        //   type: "page",
        //   ui: ui,
        //   page: "[id]",
        //   etag: "12902128391730",
        // });
        //   throw new TRPCError({
        //     code: "INTERNAL_SERVER_ERROR",
        //     message: "This page does not exist",
        //   });
        // }

        // if (input.etag !== pageData.etag) {
        //   return pageData;
        // }

        if (input.type === "layout") {
          return navBar;
        }

        if (input.page === "index") {
          return ui;
        }

        if (input.page === "shop") {
          return shop;
        }

        const page = JSON.parse(input.page) as unknown;

        if (Array.isArray(page)) {
          switch (page[1]) {
            case "1": {
              console.log("input.page", input.page);
              return plant_1;
            }
          }
        }

        return null;
      } catch (error) {
        console.log(error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "An error occurred",
        });
      }
    }),
});
