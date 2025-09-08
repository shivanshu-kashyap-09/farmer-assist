import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack initialRouteName="index">
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="farming-solution" options={{ headerTitle: "Farming Solutions" }} />
      <Stack.Screen name="weather" options={{ headerTitle: "Weather Updates" }} />
      <Stack.Screen name="impact" options={{ headerTitle: "Impact" }} />
      <Stack.Screen name="story" options={{ headerTitle: "Farmer Stories" }} />
      <Stack.Screen name="aichat" options={{ headerTitle: "AI Chat Assistant" }} />
    </Stack>
  );
}
