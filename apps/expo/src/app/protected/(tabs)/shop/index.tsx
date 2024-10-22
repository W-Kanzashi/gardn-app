import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";

export default function ShopPage() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View className="flex-1 gap-10">
        <Text className="text-center text-3xl font-bold">Shop</Text>

        <ScrollView className="px-5 py-10">
          <View className="w-full gap-4 rounded-3xl bg-white px-5 py-10 shadow">
            <Text className="text-center text-2xl font-bold">
              Sonde connecté
            </Text>

            <Image
              source="https://picsum.photos/seed/picsum/200/1000"
              style={{
                height: 200,
                width: "auto",
              }}
              contentFit="cover"
              cachePolicy="disk"
            />

            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc,
              nec ultricies nunc nisl nec nunc.
            </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
