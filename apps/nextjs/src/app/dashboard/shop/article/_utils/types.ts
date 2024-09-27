import { z } from "zod";

const plantSchema = z.object({
  id: z.string().nanoid(),
  title: z.string(),
  description: z.string(),
  image_url: z.string(),
});

const articleSchema = z.object({
  id: z.string().nanoid(),
  name: z.string(),
  description: z.string(),
  image_url: z.string().nullish(),
  price: z.number().transform((price) => (price / 100).toString()),
  active: z.boolean(),
  stock: z.number().transform((stock) => stock.toString()),
  category_id: z.string().nanoid(),
  option: z.array(
    z.object({
      option_id: z.string().nanoid(),
      name: z.string(),
      price: z.number().transform((price) => (price / 100).toString()),
      stock: z.number().transform((stock) => stock.toString()),
      available: z.boolean(),
    }),
  ),
});

type Article = z.infer<typeof articleSchema>;

const articleCategorySchema = z.object({
  id: z.string().nanoid(),
  title: z.string(),
});

type Plant = z.infer<typeof plantSchema>;
type ArticleCategory = z.infer<typeof articleCategorySchema>;

export { plantSchema, articleSchema, articleCategorySchema };
export type { Plant, ArticleCategory, Article };
