import type { Config } from "drizzle-kit";

export default {
  schema: "./src/schema",
  driver: "turso",
  dbCredentials: {
    url: process.env.DB_HOST!,
    authToken: process.env.DB_TOKEN!,
  },
  tablesFilter: ["gardn_*"],
} satisfies Config;
