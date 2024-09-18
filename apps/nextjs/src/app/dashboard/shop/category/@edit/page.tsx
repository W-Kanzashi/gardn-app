import { searchParamsCache } from "./_utils/searchParams";
import { FormCategory } from "./form";

export default function CreatePlantPage({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  const { action } = searchParamsCache.parse(searchParams);

  if (!action) {
    return null;
  }

  if (action === "edit") {
    return null;
  }

  return <FormCategory />;
}
