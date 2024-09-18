import { z } from "zod";

const articleSchema = z.object({
  id: z.string().nanoid(),
  title: z.string(),
  description: z.string(),
  image_url: z.string(),
  category_id: z.string().nanoid(),
  category_title: z.string(),
  price: z.number(),
  active: z.boolean(),
  stock: z.number(),
  option: z.array(
    z.object({
      option_id: z.string().nanoid(),
      name: z.string(),
      price: z.number(),
      stock: z.number(),
      available: z.boolean(),
    }),
  ),
});

const categorySchema = z.object({
  id: z.string().nanoid(),
  title: z.string(),
});

type Article = z.infer<typeof articleSchema>;
type Category = z.infer<typeof categorySchema>;

export { articleSchema, categorySchema };
export type { Article, Category };
