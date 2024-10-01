import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { Link, Stack } from "expo-router";
import Feather from "@expo/vector-icons/Feather";

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
          <Link href="/protected/user" asChild>
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

          <View className="flex w-full items-end justify-end gap-2 rounded-3xl bg-gray-300 px-2 py-1">
            <View className="h-[4.5rem] w-1/3 rounded-full bg-background"></View>
            <View className="h-[4.5rem] w-1/3 rounded-full bg-background"></View>
            <View className="h-[4.5rem] w-1/3 rounded-full bg-background"></View>
          </View>
        </View>

        <View className="flex flex-row gap-6 px-6">
          <View className="flex-1">
            <Text className="text-center text-xl font-bold">
              Recommandation
            </Text>

            <View className="h-64 rounded-3xl bg-gray-300"></View>
          </View>

          <View className="flex-1">
            <Text className="text-center text-xl font-bold">Mes Plantes</Text>

            <View className="h-64 rounded-3xl bg-gray-300"></View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
