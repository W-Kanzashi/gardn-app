import { searchParamsCache } from "./_utils/searchParams";
import { FormCategory } from "./form";

export default async function CreatePlantPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { action } = searchParamsCache.parse(await searchParams);

  if (!action) {
    return null;
  }

  if (action === "edit") {
    return null;
  }

  return <FormCategory />;
}
