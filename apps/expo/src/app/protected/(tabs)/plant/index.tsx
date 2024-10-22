import type { ColumnDef, ColumnFiltersState } from "@tanstack/react-table";
import type { Href } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { Link, Stack } from "expo-router";
import {
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";

const plants = [
  {
    id: "1",
    title: "Plante 1",
    image: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    id: "2",
    title: "Plante 2",
    image: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    id: "3",
    title: "Plante 3",
    image: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    id: "4",
    title: "Plante 4",
    image: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    id: "5",
    title: "Plante 5",
    image: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    id: "6",
    title: "Plante 6",
    image: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    id: "7",
    title: "Plante 7",
    image: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    id: "8",
    title: "Plante 8",
    image: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    id: "9",
    title: "Plante 9",
    image: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    id: "10",
    title: "Plante 10",
    image: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    id: "11",
    title: "Plante 11",
    image: "https://picsum.photos/seed/picsum/200/300",
  },
];

const columns: ColumnDef<(typeof plants)[number]>[] = [
  {
    accessorKey: "id",
    accessorFn: (row) => row.id,
  },
  {
    accessorKey: "title",
    accessorFn: (row) => row.title,
  },
  {
    accessorKey: "image",
    accessorFn: (row) => row.image,
  },
];

export default function Index() {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const table = useReactTable({
    data: plants,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters,
    },
  });

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
      edges={["left", "right"]}
    >
      <Stack.Screen options={{ title: "Plantes" }} />
      <ScrollView className="flex">
        <View className="flex flex-row flex-wrap">
          {/* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition */}
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => {
              return (
                <View key={row.id} className="w-1/2 gap-1 px-2 py-2">
                  <Link
                    href={`/protected/plant/${row.original.id}` as Href}
                    asChild
                  >
                    <Pressable className="relative flex aspect-square w-full flex-col gap-2 overflow-hidden rounded-2xl">
                      <Image
                        source={row.original.image}
                        alt="image"
                        style={{ flex: 1, borderRadius: 14 }}
                        contentFit="cover"
                        cachePolicy="disk"
                      />
                    </Pressable>
                  </Link>
                  <Text className="px-4 text-xl font-bold">
                    {row.original.title}
                  </Text>
                </View>
              );
            })
          ) : (
            <View>
              <Text className="h-24 text-center">No results.</Text>
            </View>
          )}
          <View className="h-32 w-full" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
