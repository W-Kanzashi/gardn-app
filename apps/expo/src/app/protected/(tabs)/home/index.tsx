import { Pressable, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { Link, Stack } from "expo-router";
import Feather from "@expo/vector-icons/Feather";

import { Text } from "~/components/text";

export default function Page() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <Stack.Screen
        options={{
          title: "Accueil",
        }}
      />
      <View className="flex gap-10">
        <View className="flex flex-row items-center justify-between px-6">
          <Link href="/protected/(tabs)/user" asChild>
            <Pressable>
              <Image
                source="https://picsum.photos/seed/picsum/200"
                style={{
                  height: 60,
                  width: 60,
                  borderRadius: 9999,
                }}
                contentFit="contain"
                cachePolicy="disk"
              />
            </Pressable>
          </Link>

          <View className="flex w-28 flex-row items-center justify-center rounded-full border border-gray-100 bg-gray-100">
            <View className="h-14 flex-1 items-center justify-center rounded-full border border-gray-200 bg-gray-200">
              <Feather name="sun" size={24} color="black" />
            </View>
            <View className="flex-1 items-center justify-center">
              <Feather name="bell" size={24} color="black" />
            </View>
          </View>
        </View>

        <View className="w-full px-6">
          <Text className="text-center text-3xl font-bold">Manage your</Text>
          <Text className="text-center text-3xl">Home plants</Text>

          <View className="flex w-full items-end justify-end gap-2 rounded-3xl bg-gray-300 px-2 py-10">
            <View className="flex h-[4.5rem] w-2/5 flex-row items-center justify-between gap-4 rounded-3xl bg-background px-8">
              <Feather name="home" size={24} color="black" />

              <View className="">
                <Text>pH</Text>
                <Text className="text-2xl">12</Text>
              </View>
            </View>
            <View className="flex h-[4.5rem] w-2/5 flex-row items-center justify-between gap-4 rounded-3xl bg-background px-8">
              <Feather name="home" size={24} color="black" />

              <View className="">
                <Text>Humidité</Text>
                <Text className="text-2xl">10%</Text>
              </View>
            </View>
            <View className="flex h-[4.5rem] w-2/5 flex-row items-center justify-between gap-4 rounded-3xl bg-background px-8">
              <Feather name="home" size={24} color="black" />

              <View className="">
                <Text>Exposition</Text>
                <Text className="text-2xl">1000</Text>
              </View>
            </View>
          </View>
        </View>

        <View className="gap-4">
          <View className="flex-row items-center justify-between px-6">
            <Text className="text-center text-xl font-bold">Mes favoris</Text>

            <Text className="text-center text-xl font-bold">Voir tout</Text>
          </View>

          <View className="">
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View className="flex flex-row gap-4 px-6">
                <Link href="/protected/plant/1" asChild>
                  <Pressable className="gap-4">
                    <View className="aspect-square w-52 rounded-md bg-black"></View>

                    <Text className="text-xl font-bold">Ficus Lyrata</Text>
                    <View className="flex w-[12.5rem] flex-row gap-1">
                      <View className="h-2 w-1/5 rounded-full bg-black"></View>
                      <View className="h-2 w-[30%] rounded-full bg-black"></View>
                      <View className="h-2 w-1/2 rounded-full bg-black"></View>
                    </View>
                  </Pressable>
                </Link>
                <View className="gap-4">
                  <View className="aspect-square w-52 rounded-md bg-black"></View>

                  <Text className="text-xl font-bold">Ficus Lyrata</Text>
                  <View className="flex w-[12.5rem] flex-row gap-1">
                    <View className="h-2 w-1/5 rounded-full bg-black"></View>
                    <View className="h-2 w-[30%] rounded-full bg-black"></View>
                    <View className="h-2 w-1/2 rounded-full bg-black"></View>
                  </View>
                </View>
                <View className="gap-4">
                  <View className="aspect-square w-52 rounded-md bg-black"></View>

                  <Text className="text-xl font-bold">Ficus Lyrata</Text>
                  <View className="flex w-[12.5rem] flex-row gap-1">
                    <View className="h-2 w-1/5 rounded-full bg-black"></View>
                    <View className="h-2 w-[30%] rounded-full bg-black"></View>
                    <View className="h-2 w-1/2 rounded-full bg-black"></View>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
