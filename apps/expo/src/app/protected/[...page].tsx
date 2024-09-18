import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import { Stack, useGlobalSearchParams } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import { eq } from "drizzle-orm";

import { renderComponent } from "~/components/render";
import { api } from "~/utils/api";
import { db } from "~/utils/db";
import { ui } from "~/utils/db/schema";

export default function Post() {
  const {
    page: [name],
  } = useGlobalSearchParams();
  console.log("page", name);
  if (!name || typeof name !== "string") throw new Error("unreachable");

  const { data } = useQuery({
    queryKey: ["ui", name],
    queryFn: async () => {
      const data = await db.query.ui.findFirst({
        where: eq(ui.page, "[id]"),
      });

      return data;
    },
    staleTime: Infinity,
  });

  const { data: uiServer } = api.expo.getByPage.useQuery(
    {
      page: name,
      etag: data?.etag,
      type: "page",
    },
    {
      staleTime: 1000 * 60 * 60 * 24,
      networkMode: "online",
    },
  );

  useEffect(() => {
    async function getUi() {
      if (!uiServer) {
        return;
      }

      await db
        .insert(ui)
        .values({
          id: uiServer.id,
          page: "[id]",
          ui: uiServer.ui,
          etag: uiServer.etag,
        })
        .onConflictDoUpdate({
          set: {
            ui: uiServer.ui,
            etag: uiServer.etag,
          },
        });

      await api.useUtils().expo.getByPage.invalidate();
    }

    if (!data) {
      getUi().catch((error) => {
        console.error(error);
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!data) return null;

  return (
    <SafeAreaView>
      <Stack.Screen options={{ title: data.ui.title }} />
      {renderComponent(data.ui)}
    </SafeAreaView>
  );
}
