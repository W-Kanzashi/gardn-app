import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { Image } from "expo-image";
import { router, Stack } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export default function Page() {
  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen options={{ headerShown: false }} />
      <View className="h-full w-full flex-1">
        <Image
          source={{ uri: "https://picsum.photos/seed/gardn/1000/3000" }}
          style={{
            flex: 1,
            width: "100%",
            height: "100%",
          }}
          contentFit="cover"
        />
      </View>
      <View className="absolute top-20 px-4">
        <View className="flex w-full flex-1 flex-row items-center justify-between rounded-full bg-white p-2">
          <Pressable
            className="flex h-14 w-14 items-center justify-center rounded-full border border-gray-800 bg-white"
            onPress={() => router.back()}
          >
            <Feather name="chevron-left" size={24} color="black" />
          </Pressable>

          <View className="px-4">
            <Text className="text-2xl font-bold">Tomate</Text>
          </View>
        </View>
      </View>

      <View className="absolute bottom-60 w-full px-4">
        <View className="absolute -top-4 left-2 -z-10 mx-2 flex w-full flex-1 scale-90 rounded-3xl border-2 border-lime-400 bg-lime-100 px-4 py-4">
          <View className="flex flex-row items-center gap-2">
            <FontAwesome6 name="warning" size={16} color="black" />
            <Text className="font-bold text-lime-950">Humidité</Text>
          </View>
          <Text className="text-xl font-semibold text-lime-900">
            lorem ipsum
          </Text>
          <Pressable className="absolute right-2 top-2 flex items-center justify-center">
            <Feather name="x" size={20} style={{ color: "#365314" }} />
            <View className="absolute h-10 w-10"></View>
          </Pressable>
        </View>

        <View className="absolute -top-2 left-2 -z-10 mx-2 flex w-full flex-1 scale-95 rounded-3xl border-2 border-lime-400 bg-lime-100 px-4 py-4">
          <View className="flex flex-row items-center gap-2">
            <FontAwesome6 name="warning" size={16} color="black" />
            <Text className="font-bold text-lime-950">Humidité</Text>
          </View>
          <Text className="text-xl font-semibold text-lime-900">
            lorem ipsum
          </Text>
          <Pressable className="absolute right-2 top-2 flex items-center justify-center">
            <Feather name="x" size={20} style={{ color: "#365314" }} />
            <View className="absolute h-10 w-10"></View>
          </Pressable>
        </View>

        <View className="flex w-full flex-1 rounded-3xl border-2 border-lime-300 bg-lime-100 px-4 py-4">
          <View className="flex flex-row items-center gap-2">
            <FontAwesome6 name="warning" size={16} color="black" />
            <Text className="font-bold text-lime-950">Humidité</Text>
          </View>
          <Text className="text-xl font-semibold text-lime-900">
            lorem ipsum
          </Text>
          <Pressable className="absolute right-2 top-2 flex items-center justify-center">
            <Feather name="x" size={20} style={{ color: "#365314" }} />
            <View className="absolute h-10 w-10"></View>
          </Pressable>
        </View>
      </View>

      <ScrollView
        className="absolute bottom-10 flex flex-1 flex-row px-4"
        horizontal={true}
        contentContainerStyle={{
          gap: 8,
          paddingEnd: 30,
        }}
        showsHorizontalScrollIndicator={false}
      >
        <View className="flex w-52 rounded-3xl bg-white p-6">
          <View className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-lime-200">
            <FontAwesome6 name="temperature-half" size={20} color="black" />
          </View>
          <Text className="mb-1 font-bold">Température</Text>
          <Text className="text-4xl font-bold">
            {Math.ceil((Math.random() * 100) % 30)}C
          </Text>
        </View>
        <View className="flex w-52 rounded-3xl bg-white p-6">
          <View className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-200">
            <FontAwesome6 name="droplet" size={20} color="black" />
          </View>
          <Text className="mb-1 font-bold">Humidité</Text>
          <Text className="text-4xl font-bold">
            {Math.ceil(Math.random() * 100)}%
          </Text>
        </View>
        <View className="flex w-52 rounded-3xl bg-white p-6">
          <View className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-200">
            <FontAwesome6 name="vial-virus" size={20} color="black" />
          </View>
          <Text className="mb-1 font-bold">pH</Text>
          <Text className="text-4xl font-bold">
            {Math.ceil(Math.random() * 10)}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
