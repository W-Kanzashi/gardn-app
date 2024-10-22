import { Tabs } from "expo-router";

import { NavBar } from "~/components/navbar";

export default function ProtectedLayout() {
  return (
    <Tabs tabBar={() => <NavBar />} screenOptions={{ headerShown: false }} />
  );
}
