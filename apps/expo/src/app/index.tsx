import type { ColumnDef, ColumnFiltersState } from "@tanstack/react-table";
import type { Href } from "expo-router";
import { useState } from "react";
import { Pressable, SafeAreaView, Text, TextInput, View } from "react-native";
import { Image } from "expo-image";
import { Link, Stack } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
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
    <SafeAreaView className="flex-1 bg-background">
      <Stack.Screen
        options={{
          title: "Les plantes",
          headerRight: () => (
            <Link href="/tmp">
              <Text>Settings</Text>
            </Link>
          ),
        }}
      />

      <View className="flex gap-10 px-10">
        <View className="flex flex-row justify-between pt-10">
          <Link href="/" asChild>
            <Pressable className="rounded-lg border-2 border-green-800 bg-green-800 px-10 py-2">
              <Text className="font-semibold text-white">Mes plantes</Text>
            </Pressable>
          </Link>

          <Link href="/" asChild>
            <Pressable className="rounded-lg border-2 border-green-800 px-10 py-2">
              <Text className="font-semibold">Bibliothèque</Text>
            </Pressable>
          </Link>
        </View>

        <View className="relative flex flex-row">
          <TextInput
            className="h-10 w-full rounded-lg border-2 py-1 pl-2 pr-10"
            placeholder="Recherche"
            value={table.getColumn("title")?.getFilterValue() as string}
            onChangeText={(event) => {
              table.getColumn("title")?.setFilterValue(event);
            }}
          />

          <Feather
            name="zoom-in"
            size={24}
            color="black"
            className="absolute right-2 top-1"
          />
        </View>

        <View className="flex flex-row flex-wrap gap-4">
          {/* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition */}
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => {
              return (
                <Link
                  key={row.id}
                  href={`/protected/plant/${row.original.id}` as Href}
                  asChild
                >
                  <Pressable className="relative flex h-52 w-[30.7%] flex-col gap-4 rounded-2xl border bg-white px-4 py-3 shadow-sm">
                    <Image
                      source={row.original.image}
                      alt="image"
                      style={{ flex: 1, borderRadius: 5 }}
                      contentFit="cover"
                      cachePolicy="disk"
                    />

                    <Text className="text-center text-xl font-bold text-green-500">
                      {row.original.title}
                    </Text>
                  </Pressable>
                </Link>
              );
            })
          ) : (
            <View>
              <Text className="h-24 text-center">No results.</Text>
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}
