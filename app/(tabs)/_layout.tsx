import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
import { useRouter } from "expo-router";

function DocsButton() {
  const router = useRouter();
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Pressable
        onPress={() => router.push("/docs")}
        style={{ padding: 10, flexDirection: "row", alignItems: "center" }}
      >
        <Ionicons name="help-circle-outline" size={24} color="#007AFF" />
      </Pressable>
    </View>
  );
}

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
          headerLeft: () => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 10,
                marginRight: 10,
              }}
            >
              <Ionicons name="star" size={24} color="#61DAFB" />
            </View>
          ),
          headerRight: () => <DocsButton />,
        }}
      />
      <Tabs.Screen
        name="todo-demo"
        options={{
          title: "Todos",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="checkbox" color={color} size={size} />
          ),
          headerLeft: () => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 10,
                marginRight: 10,
              }}
            >
              <Ionicons name="star" size={24} color="#61DAFB" />
            </View>
          ),
          headerRight: () => <DocsButton />,
        }}
      />
      <Tabs.Screen
        name="project"
        options={{
          title: "Projects",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="briefcase" color={color} size={size} />
          ),
          headerLeft: () => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 10,
                marginRight: 10,
              }}
            >
              <Ionicons name="star" size={24} color="#61DAFB" />
            </View>
          ),
          headerRight: () => <DocsButton />,
        }}
      />
      <Tabs.Screen
        name="signup"
        options={{
          title: "User",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
          headerLeft: () => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 10,
                marginRight: 10,
              }}
            >
              <Ionicons name="star" size={24} color="#61DAFB" />
            </View>
          ),
          headerRight: () => <DocsButton />,
        }}
      />
    </Tabs>
  );
}
