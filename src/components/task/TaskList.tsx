import { Task } from "@/src/models/TasksModel";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface TaskListProps {
  task: Task;
  onRemove: (id: string) => void;
  onToggle: (id: string, completed: boolean) => void;
  onEdit: (id: string, title: string) => void;
}

export const TaskList = ({
  task,
  onRemove,
  onToggle,
  onEdit,
}: TaskListProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.leftSection}
        onPress={() => onToggle(task.id, task.completed)}
      >
        <Ionicons
          name={task.completed ? "checkbox" : "square-outline"}
          size={24}
          color={task.completed ? "#28a745" : "#555"}
        />
        <Text
          style={[
            styles.text,
            task.completed && {
              textDecorationLine: "line-through",
              color: "#999",
            },
          ]}
        >
          {task.title}
        </Text>
      </TouchableOpacity>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <TouchableOpacity>
          <Ionicons
            name="create-outline"
            onPress={() => onEdit(task.id, task.title)}
            size={22}
            color="#007bff"
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onRemove(task.id)}>
          <Ionicons name="trash-outline" size={22} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    marginBottom: 10,
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  text: {
    fontSize: 16,
  },
});
