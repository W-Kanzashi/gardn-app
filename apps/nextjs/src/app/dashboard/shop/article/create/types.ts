import { z } from "zod";

const plantSchema = z.object({
  id: z.string().nanoid(),
  title: z.string(),
  description: z.string(),
  image_url: z.string(),
});

const articleCategorySchema = z.object({
  id: z.string().nanoid(),
  title: z.string(),
});

type Plant = z.infer<typeof plantSchema>;
type ArticleCategory = z.infer<typeof articleCategorySchema>;

export { plantSchema, articleCategorySchema };
export type { Plant, ArticleCategory };
