import { plant } from "node_modules/@acme/db/src/schema/plant";

import { db, eq } from "@acme/db";

import { plantSchema } from "../_utils/types";
import { FormPlant } from "./form";

async function getPlantInfo({ plantId }: { plantId: string | undefined }) {
  if (!plantId) {
    return null;
  }

  const plantData = await db.query.plant.findFirst({
    where: eq(plant.id, plantId),
    columns: {
      id: true,
      title: true,
      description: true,
      image_url: true,
    },
  });

  const validatedPlant = plantSchema.safeParse(plantData);

  if (!validatedPlant.success) {
    console.log(validatedPlant.error);
    return null;
  }

  return validatedPlant.data;
}

export default async function EditPlant({
  params,
}: {
  params: { id?: string };
}) {
  const plantData = await getPlantInfo({
    plantId: params.id,
  });

  if (!plantData) {
    return null;
  }

  return (
    <div>
      <FormPlant plantData={plantData} />
    </div>
  );
}
