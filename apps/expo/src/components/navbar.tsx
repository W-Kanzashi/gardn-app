import { Pressable, View } from "react-native";
import { Link } from "expo-router";
import Feather from "@expo/vector-icons/Feather";

export function NavBar() {
  return (
    <View className="absolute bottom-6 mx-6 flex flex-row items-center justify-between rounded-full bg-gray-300">
      <Link href="/protected/home" asChild>
        <Pressable className="flex flex-1 items-center justify-center p-6">
          <Feather name="home" size={24} color="#0f0f0f" />
        </Pressable>
      </Link>

      <Link href="/protected/shop" asChild>
        <Pressable className="flex flex-1 items-center justify-center p-6">
          <Feather name="shopping-cart" size={24} color="#0f0f0f" />
        </Pressable>
      </Link>

      <Link href="/protected/plant" asChild>
        <Pressable className="flex flex-1 items-center justify-center p-6">
          <Feather name="sun" size={24} color="#0f0f0f" />
        </Pressable>
      </Link>

      <Link href="/protected/settings" asChild>
        <Pressable className="flex flex-1 items-center justify-center p-6">
          <Feather name="settings" size={24} color="#0f0f0f" />
        </Pressable>
      </Link>
    </View>
  );
}
