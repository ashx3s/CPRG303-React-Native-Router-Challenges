import { Stack } from "expo-router";

// Option A: Navigation Consistency
// TODO: Ensure consistent navigation behavior between different stack screens
// TODO: Make sure the header and navigation elements are consistent across all stack screens

// Option B: Reusable Stack Configuration
// TODO: Identify the options currently being configured for the stack
// TODO: Create a reusable component that accepts the needed options through props
// TODO: Refactor the stack to use your component instead of repeating the configuration
// TODO: Make sure different stack screens can still provide their own option values where needed

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="docs" options={{ headerShown: false }} />
    </Stack>
  );
}
