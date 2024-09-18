import {
  createSearchParamsCache,
  parseAsString,
  parseAsStringLiteral,
} from "nuqs/server";

const action = ["create", "edit"] as const;

export const searchParamsCache = createSearchParamsCache({
  // List your search param keys and associated parsers here:
  action: parseAsStringLiteral(action),
  id: parseAsString,
});
