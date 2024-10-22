import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, Redirect, Stack } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";

function MobileAuth() {
  return (
    <>
      <Link href="/(auth)/sign-in">
        <Text>Sign In</Text>
      </Link>
      <Link href="/(auth)/sign-up">
        <Text>Sign Up</Text>
      </Link>
    </>
  );
}

export default function Index() {
  const { isSignedIn } = useAuth();

  if (isSignedIn) {
    return <Redirect href={"/protected"} />;
  }

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
