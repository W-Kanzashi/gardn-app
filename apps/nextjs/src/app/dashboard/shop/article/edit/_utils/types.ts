import { z } from "zod";

const plantSchema = z.object({
  id: z.string().nanoid(),
  title: z.string(),
  description: z.string(),
  image_url: z.string(),
  category_id: z.string().nanoid(),
});

type Plant = z.infer<typeof plantSchema>;

export { plantSchema };
export type { Plant };
