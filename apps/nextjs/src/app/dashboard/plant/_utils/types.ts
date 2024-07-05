import { z } from "zod";

const plantSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  image_url: z.string(),
  deleted: z.boolean(),
  category_id: z.string(),
  created_at: z.date(),
  // updated_at: z.date().nullish(),
});

type Plant = z.infer<typeof plantSchema>;

const plantListSchema = z.array(plantSchema);

type PlantList = z.infer<typeof plantListSchema>;

type PlantForm = Omit<Plant, "id" | "createdAt" | "updatedAt">;

export { plantSchema, plantListSchema };
export type { Plant, PlantList, PlantForm };
