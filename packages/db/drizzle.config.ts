import type { Config } from "drizzle-kit";

export default {
  schema: "./src/schema.ts",
  driver: "turso",
  dialect: "sqlite",
  dbCredentials: {
    url: process.env.DB_HOST!,
    authToken: process.env.DB_TOKEN!,
  },
  tablesFilter: ["gardn_*"],
} satisfies Config;
