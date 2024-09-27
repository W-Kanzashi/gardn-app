import { z } from "zod";

const articleSchema = z.object({
  id: z.string().nanoid(),
  name: z.string(),
  description: z.string(),
  image_url: z.string().nullish(),
  stock: z.number(),
  price: z.number(),
  active: z.boolean(),
  created_at: z.date(),
});

type Article = z.infer<typeof articleSchema>;

const articleListSchema = z.array(articleSchema);

type ArticleList = z.infer<typeof articleListSchema>;

type ArticleForm = Omit<Article, "id" | "createdAt" | "updatedAt">;

export { articleSchema, articleListSchema };
export type { Article, ArticleList, ArticleForm };
