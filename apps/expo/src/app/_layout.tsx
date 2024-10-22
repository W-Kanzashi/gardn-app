import { Slot, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { TRPCProvider } from "~/utils/api";

import "../styles.css";

import { useEffect } from "react";
import { Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useDrizzleStudio } from "expo-drizzle-studio-plugin";
import * as SplashScreen from "expo-splash-screen";
import * as SQLite from "expo-sqlite";
import {
  ClerkLoaded,
  ClerkProvider,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-expo";
import {
  ShantellSans_400Regular,
  useFonts,
} from "@expo-google-fonts/shantell-sans";
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import { useColorScheme } from "nativewind";

import { db } from "~/utils/db";
import migrations from "~/utils/db/drizzle/migrations";
import { tokenCache } from "~/utils/session-store";

const dbUI = SQLite.openDatabaseSync("gardn.db");

// Prevent native splash screen from autohiding before App component declaration
SplashScreen.preventAutoHideAsync()
  .then((result) =>
    console.log(`SplashScreen.preventAutoHideAsync() succeeded: ${result}`),
  )
  .catch(console.warn); // it's good to explicitly catch and inspect any error

// This is the main layout of the app
// It wraps your pages with the providers they need
export default function RootLayout() {
  const { colorScheme } = useColorScheme();
  useDrizzleStudio(dbUI);
  const { success, error: dbError } = useMigrations(db, migrations);
  const [loaded, fontsError] = useFonts({
    ShantellSans_400Regular,
  });

  useEffect(() => {
    if (loaded || fontsError || dbError) {
      void SplashScreen.hideAsync();
    }
  }, [dbError, fontsError, loaded]);

  if (dbError) {
    return (
      <View>
        <Text>Migration error: {dbError.message}</Text>
      </View>
    );
  }

  if (!success) {
    return (
      <View>
        <Text>Migration is in progress...</Text>
      </View>
    );
  }

  // eslint-disable-next-line turbo/no-undeclared-env-vars
  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

  if (!publishableKey) {
    throw new Error(
      "Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env",
    );
  }

  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
      <ClerkLoaded>
        <TRPCProvider>
          <SafeAreaProvider>
            {/*
              The Stack component displays the current page.
              It also allows you to configure your screens 
            */}
            <SignedIn>
              <Stack
                screenOptions={{
                  contentStyle: {
                    backgroundColor:
                      colorScheme == "dark" ? "#09090B" : "#FFFFFF",
                  },
                  headerShown: false,
                }}
                initialRouteName="/protected"
              />
            </SignedIn>
            <StatusBar />
            <SignedOut>
              <Slot />
            </SignedOut>
          </SafeAreaProvider>
        </TRPCProvider>
      </ClerkLoaded>
    </ClerkProvider>
  );
}
