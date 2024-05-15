import { z } from "zod";

const plantSchema = z.object({
  id: z.string().cuid2(),
  title: z.string(),
  description: z.string(),
  image_url: z.string(),
});

type Plant = z.infer<typeof plantSchema>;

export { plantSchema };
export type { Plant };
