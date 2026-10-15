import { useState } from "react";
import { View } from "react-native";
import { TodoList, TodoItem } from "./TodoList";
import { AddTodo } from "./AddTodo";

const seed: TodoItem[] = require("../../data/todos.json");

export function TodoDemo() {
  const [todos, setTodos] = useState<TodoItem[]>(seed);

  function addTodo(title: string, description: string) {
    setTodos((prev) => [...prev, { id: Date.now(), title, description }]);
  }

  return (
    <View style={{ flex: 1 }}>
      <AddTodo onAdd={addTodo} />
      <TodoList list={todos} />
    </View>
  );
}
