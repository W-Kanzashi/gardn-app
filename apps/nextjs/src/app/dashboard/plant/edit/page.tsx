import { db, eq } from "@acme/db";
import { plant } from "node_modules/@acme/db/src/schema/plant";
import { FormPlant } from "./form";
import { plantSchema } from "./types";

async function getPlantInfo({
  plantId,
}: {
  plantId: string | undefined;
}) {
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
    return null;
  }

  return validatedPlant.data;
}

export default async function EditPlant({
  searchParams,
}: {
  searchParams: { id: string | undefined };
}) {
  if (!searchParams.id) {
    return null;
  }

  const plantData = await getPlantInfo({
    plantId: searchParams.id,
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
