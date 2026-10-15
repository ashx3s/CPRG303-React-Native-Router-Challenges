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
        {/*<Text style={{ marginLeft: 5, color: "#007AFF" }}>Docs</Text>*/}
      </Pressable>
    </View>
  );
}

// Option A: Navigation Consistency
// TODO: Fix navigation so tab navigation does not disappear when navigating through Docs
// TODO: Make Docs and AppName follow a consistent navigation structure
// TODO: Test the result by moving between the main tabs and navigating deeper into Docs

// Option B: Reusable Tab Configuration
// TODO: Identify the options currently being configured for the tabs
// TODO: Create a reusable component that accepts the needed options through props
// TODO: Refactor the tabs to use your component instead of repeating the configuration
// TODO: Make sure different tabs can still provide their own option values where needed

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
              }}
            >
              <Ionicons name="logo-react" size={24} color="#61DAFB" />
              <Text style={{ marginLeft: 5, fontSize: 18, fontWeight: "bold" }}>
                AppName
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="week"
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
              }}
            >
              <Ionicons name="logo-react" size={24} color="#61DAFB" />
              <Text style={{ marginLeft: 5, fontSize: 18, fontWeight: "bold" }}>
                AppName
              </Text>
            </View>
          ),
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
              }}
            >
              <Ionicons name="logo-react" size={24} color="#61DAFB" />
              <Text style={{ marginLeft: 5, fontSize: 18, fontWeight: "bold" }}>
                AppName
              </Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
