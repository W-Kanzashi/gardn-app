import { z } from "zod";

const templateSchema = z.object({
  key: z.string(),
  title: z.string(),
});

const uiSchema = z.discriminatedUnion("type", [
  templateSchema.extend({
    type: z.literal("view"),
  }),
]);

type UISchema = z.infer<typeof uiSchema>;

export { uiSchema };
export type { UISchema };
