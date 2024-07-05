import { z } from "zod";

const categorySchema = z.object({
  id: z.string().nanoid(),
  title: z.string(),
  description: z.string(),
  created_at: z.date(),
  updated_at: z.date().nullish(),
});

type Category = z.infer<typeof categorySchema>;

export { categorySchema };
export type { Category };
