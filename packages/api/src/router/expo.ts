import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { and, eq } from "@acme/db";
import * as schema from "@acme/db/schema";

import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const expoRouter = createTRPCRouter({
  getByPage: publicProcedure
    .input(
      z.object({
        page: z.string(),
        etag: z.string().nullish(),
        type: z.enum(["layout", "page"]),
      }),
    )
    .query(async ({ ctx, input }) => {
      // Check in the db if the page exists
      // If it does, check if the etag is the same
      // If it is, return null
      // If it isn't, return the new ui

      try {
        const pageData = await ctx.db.query.ui.findFirst({
          where: and(
            eq(schema.ui.type, input.type),
            eq(schema.ui.page, input.page),
          ),
          columns: {
            id: true,
            etag: true,
            ui: true,
            type: true,
            updated_at: true,
          },
        });

        const ui = {
          stack: {},
          ui: {
            key: "root",
            title: "Tomates",
            type: "view",
            style: {
              backgroundColor: "#f0f0f0",
              height: "100%",
            },
            children: [
              {
                key: "header",
                type: "view",
                style: {
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 8,
                  borderBottomWidth: 1,
                  borderColor: "#ccc",
                  paddingVertical: 8,
                  paddingHorizontal: 10,
                },
                children: [
                  {
                    key: "header-back-button",
                    type: "button",
                    style: {
                      alignItems: "center",
                      justifyContent: "center",
                    },
                    eventHandlers: {
                      onPress: () => alert("Back Button clicked"),
                    },
                    props: undefined,
                    children: [
                      {
                        key: "header-back-button-icon",
                        type: "view",
                        style: {
                          width: 24,
                          height: 24,
                          marginLeft: 8,
                        },
                        children: [
                          {
                            key: "header-back-button-icon-image",
                            type: "text",
                            content: "Home page",
                            style: {
                              width: 24,
                              height: 24,
                            },
                          },
                        ],
                      },
                    ],
                  },
                  {
                    key: "header-title",
                    type: "text",
                    text: "Home page",
                    style: {
                      fontSize: 24,
                      color: "#000",
                    },
                  },
                  {
                    key: "header-button",
                    type: "button",
                    style: {
                      alignItems: "center",
                      justifyContent: "center",
                      paddingHorizontal: 16,
                      paddingVertical: 8,
                      borderRadius: 4,
                      backgroundColor: "black",
                    },
                    eventHandlers: {
                      onPress: "() => console.log('Nav Button clicked')",
                    },
                    props: undefined,
                    children: [
                      {
                        key: "header-button-text",
                        type: "text",
                        text: "Settings",
                        style: {
                          fontSize: 16,
                          lineHeight: 21,
                          fontWeight: "bold",
                          letterSpacing: 0.25,
                          color: "white",
                        },
                      },
                    ],
                  },
                ],
              },
              {
                key: "content",
                type: "view",
                style: {
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 8,
                },
                children: [
                  {
                    key: "title",
                    type: "text",
                    text: "Welcome to the App!",
                    style: {
                      fontSize: 24,
                      color: "#000",
                    },
                  },
                  {
                    key: "button",
                    type: "button",
                    style: {
                      alignItems: "center",
                      justifyContent: "center",
                      paddingHorizontal: 16,
                      paddingVertical: 8,
                      borderRadius: 4,
                      backgroundColor: "black",
                    },
                    eventHandlers: {
                      onPress: "() => console.log('Button clicked')",
                    },
                    props: undefined,
                    children: [
                      {
                        key: "link-shop",
                        type: "link",
                        href: "/protected/shop",
                        children: [
                          {
                            key: "link-shop-text",
                            type: "text",
                            text: "Shop",
                            style: {
                              fontSize: 16,
                              lineHeight: 21,
                              fontWeight: "bold",
                              letterSpacing: 0.25,
                              color: "white",
                            },
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        };

        if (!pageData) {
          await ctx.db.insert(schema.ui).values({
            type: "page",
            ui: ui,
            page: "[id]",
            etag: "12902128391730",
          });
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "This page does not exist",
          });
        }

        console.log("Return new page data", typeof pageData.ui);

        if (input.etag !== pageData.etag) {
          console.log("Return new page data");
          return pageData;
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
