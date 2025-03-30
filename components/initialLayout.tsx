import { useAuth } from "@clerk/clerk-expo";
import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";

const InitialLayout = () => {
  const { isLoaded, isSignedIn } = useAuth();

  const router = useRouter();
  const segments = useSegments();
  const inAuthScreen = segments[0] === "(auth)";

  useEffect(() => {
    if (!isLoaded) return;
    if (!isSignedIn && !inAuthScreen) {
      router.replace("/(auth)/login");
    } else if (isSignedIn && inAuthScreen) {
      router.replace("/(tabs)");
    }
  }, [isLoaded, isSignedIn, segments]);

  if (!isLoaded) return null;

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
};

export default InitialLayout;
