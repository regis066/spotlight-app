import { COLORS } from "@/constants/theme";
import { Tabs } from "expo-router";
import {
  BookmarkIcon,
  HeartIcon,
  HomeIcon,
  PlusCircleIcon,
  UserCircleIcon,
} from "react-native-heroicons/solid";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.grey,
        tabBarStyle: {
          backgroundColor: "black",
          borderTopWidth: 0,
          elevation: 0,
          height: 40,
          position: "absolute",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => <HomeIcon size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="bookmarks"
        options={{
          tabBarIcon: ({ color }) => <BookmarkIcon size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          tabBarIcon: ({ color }) => (
            <PlusCircleIcon size={24} color={COLORS.primary} />
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          tabBarIcon: ({ color }) => <HeartIcon size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => <UserCircleIcon size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
