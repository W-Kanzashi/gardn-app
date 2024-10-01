import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, Stack } from "expo-router";

function MobileAuth() {
  return (
    <>
      <Link href="/protected" asChild>
        <Pressable>
          <Text>Login</Text>
        </Pressable>
      </Link>
    </>
  );
}

export default function Index() {
  return (
    <SafeAreaView className="bg-background">
      {/* Changes page title visible on the header */}
      <Stack.Screen options={{ headerShown: false }} />
      <View className="h-full w-full bg-background p-4">
        <Text className="pb-2 text-center text-5xl font-bold text-foreground">
          Garnd'n
        </Text>

        <MobileAuth />
      </View>
    </SafeAreaView>
  );
}
