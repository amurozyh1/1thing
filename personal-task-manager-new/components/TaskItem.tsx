import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Task } from "../types";

interface TaskItemProps {
  task: Task;
  onPress: (task: Task) => void;
  onToggleStatus: (id: string) => void;
}

export default function TaskItem({
  task,
  onPress,
  onToggleStatus,
}: TaskItemProps) {
  return (
    <TouchableOpacity
      style={[
        styles.taskItem,
        task.status === "completed" && styles.completedTask,
      ]}
      onPress={() => onPress(task)}
    >
      <View style={styles.taskContent}>
        <Text
          style={[
            styles.title,
            task.status === "completed" && styles.completedText,
          ]}
        >
          {task.title}
        </Text>
        <Text style={styles.status}>Status: {task.status}</Text>
      </View>
      <TouchableOpacity
        style={styles.statusButton}
        onPress={() => onToggleStatus(task.id)}
      >
        <Text>{task.status === "pending" ? "✓" : "↻"}</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  taskItem: {
    flexDirection: "row",
    padding: 16,
    marginBottom: 12,
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    elevation: 2,
  },
  taskContent: {
    flex: 1,
  },
  statusButton: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: "#e8e8e8",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  status: {
    color: "#666",
  },
  completedTask: {
    backgroundColor: "#f0f8f0",
  },
  completedText: {
    textDecorationLine: "line-through",
    color: "#888",
  },
});
