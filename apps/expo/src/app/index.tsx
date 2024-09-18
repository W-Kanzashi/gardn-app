import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import { Stack } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import { eq } from "drizzle-orm";

import { Pressable } from "~/components/button";
import { renderComponent } from "~/components/render";
import { Text } from "~/components/text";
import { api } from "~/utils/api";
import { db } from "~/utils/db";
import { ui } from "~/utils/db/schema";

export default function Index() {
  const utils = api.useUtils();
  const { data } = useQuery({
    queryKey: ["home"],
    queryFn: async () => {
      const data = await db.query.ui.findFirst({
        where: eq(ui.page, "[id]"),
      });

      if (!data) {
        return null;
      }

      console.log("query", data);

      return data;
    },
    staleTime: Infinity,
  });

  const { data: uiServer } = api.expo.getByPage.useQuery(
    {
      page: "[id]",
      type: "page",
      etag: data?.etag,
    },
    {
      staleTime: 1000 * 60 * 60 * 24,
      networkMode: "online",
    },
  );

  useEffect(() => {
    async function getUi() {
      if (!uiServer) {
        console.log("Server data is null");
        return;
      }

      try {
        await db
          .insert(ui)
          .values({
            id: uiServer.id,
            page: "[id]",
            ui: uiServer.ui.ui,
            stavck: uiServer.ui.stack,
            etag: uiServer.etag,
          })
          .onConflictDoUpdate({
            set: {
              ui: uiServer.ui,
              etag: uiServer.etag,
            },
            target: ui.id,
          });

        await utils.expo.getByPage.invalidate(undefined, {
          queryKey: ["home"],
        });
        console.log("Insert new data");
      } catch (error) {
        console.error(error);
      }
    }

    getUi().catch((error) => {
      console.error(error);
    });
  });

  if (!data) return null;

  console.log("data", data, "uiServer", uiServer);

  return (
    <SafeAreaView className="bg-background">
      <Stack.Screen
        options={{
          title: data.ui.title,
          headerLeft: () => (
            <Pressable>
              <Text>Retour</Text>
            </Pressable>
          ),
          headerRight: () => (
            <Pressable>
              <Text>Settings</Text>
            </Pressable>
          ),
        }}
      />
      {renderComponent(data.ui)}
    </SafeAreaView>
  );
}
