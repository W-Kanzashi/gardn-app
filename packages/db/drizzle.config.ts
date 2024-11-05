import type { Config } from "drizzle-kit";

export const credentials =
  process.env.NODE_ENV === "production"
    ? {
        url: process.env.DB_HOST!,
        authToken: process.env.DB_TOKEN!,
      }
    : {
        url: process.env.DB_HOST!,
      };

export default {
  schema: "./src/schema.ts",
  dialect: "turso",
  dbCredentials: credentials,
  tablesFilter: ["gardn_*"],
  verbose: true,
} satisfies Config;
