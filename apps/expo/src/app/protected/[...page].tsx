import type { ErrorBoundaryProps } from "expo-router";
import React, { useEffect } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { Redirect, Stack, useGlobalSearchParams } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import { eq } from "drizzle-orm";

import { renderComponent } from "~/components/render";
import { api } from "~/utils/api";
import { db } from "~/utils/db";
import { ui } from "~/utils/db/schema";

export function ErrorBoundary({ error, retry }: ErrorBoundaryProps) {
  console.log("ErrorBoundary", error);
  return (
    <View style={{ flex: 1 }}>
      <Text>{error.message}</Text>
      <Text onPress={retry}>Try Again?</Text>
    </View>
  );
}

export default function Post() {
  const { page } = useGlobalSearchParams();

  console.log("page", page);

  if (!page) throw new Error("unreachable");

  // const { data, error } = useQuery({
  //   queryKey: typeof page === "string" ? [page] : page,
  //   queryFn: async () => {
  //     const data = await db.query.ui.findFirst({
  //       where: eq(ui.page, JSON.stringify(page)),
  //     });
  //
  //     if (!data) {
  //       throw new Error("NOT_FOUND");
  //     }
  //
  //     return data;
  //   },
  // });
  //
  const { data: uiServer } = api.expo.getByPage.useQuery({
    page: JSON.stringify(page),
    type: "page",
  });

  // useEffect(() => {
  //   async function getUi() {
  //     if (!uiServer) {
  //       return;
  //     }
  //
  //     const query = db.insert(ui).values({
  //       id: uiServer.id,
  //       page: page,
  //       ui: uiServer.ui,
  //     });
  //     // .onConflictDoUpdate({
  //     //   set: {
  //     //     ui: uiServer.ui,
  //     //     etag: uiServer.etag,
  //     //     stack: uiServer.stack,
  //     //     page: JSON.stringify(page),
  //     //   },
  //     // });
  //
  //     console.log("query", query.toSQL());
  //
  //     await query;
  //
  //     await api.useUtils().expo.getByPage.invalidate();
  //   }
  //
  //   if (!data) {
  //     getUi().catch((error) => {
  //       console.error(error);
  //     });
  //   }
  // });

  if (!uiServer) return <Text>Loading...</Text>;
  //
  // if (error) {
  //   console.log("error", error);
  //   return <Redirect href="/not-found" />;
  // }

  return (
    <SafeAreaView>
      {/* <Stack.Screen options={{ title: data.ui.title }} /> */}
      {renderComponent(uiServer.ui)}
    </SafeAreaView>
  );
}
