import { Tabs }
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
