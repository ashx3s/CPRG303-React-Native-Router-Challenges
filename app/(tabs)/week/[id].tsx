import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
export default function WeekDetailScreen() {
  const { id } = useLocalSearchParams();
  const weeks = require("../../../data/weeks.json");
  // TODO: Resolve this type error
  const week = weeks.find((week) => week.id === Number(id));

  // return a fallback view

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Week {week.id}: {week.topic}
      </Text>
      <Text style={styles.content}>
        This is the content for Week {week.id}.
      </Text>
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
    marginBottom: 20,
  },
  content: {
    fontSize: 18,
  },
});
