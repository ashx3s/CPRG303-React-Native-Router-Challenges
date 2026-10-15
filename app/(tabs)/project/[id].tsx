import { View, Text, StyleSheet, FlatList } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function ProjectDetailScreen() {
  const { id } = useLocalSearchParams();
  const projects = require("../../../data/projects.json");
  const project = projects.find((project) => project.id === Number(id));

  if (!project) {
    return (
      <View style={styles.container}>
        <Text>Project not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{project.title}</Text>
      <Text style={styles.description}>{project.description}</Text>
      <Text style={styles.subtitle}>Todo Tasks:</Text>
      <FlatList
        data={project.todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Text style={styles.todoTitle}>{item.title}</Text>
            <Text style={styles.todoDescription}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  todoItem: {
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  todoTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  todoDescription: {
    fontSize: 14,
  },
});
