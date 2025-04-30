import React from "react";
import { Modal, View, Text, Button, StyleSheet } from "react-native";
import { Task } from "../types";

// Props for ViewTaskModal component
interface ViewTaskModalProps {
  visible: boolean;
  task: Task | null;
  onDelete: () => void;
  onEdit: () => void;
  onClose: () => void;
}

// Modal component to view task details
export default function ViewTaskModal({
  visible,
  task,
  onDelete,
  onEdit,
  onClose,
}: ViewTaskModalProps) {
  // If no task is selected, don't render the modal
  if (!task) return null;

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {/* Task title */}
          <Text style={styles.modalTitle}>{task.title}</Text>
          {/* Task description */}
          <Text style={styles.description}>{task.description}</Text>
          {/* Task status */}
          <Text style={styles.statusDetail}>Status: {task.status}</Text>
          {/* Action buttons */}
          <View style={styles.modalButtons}>
            <Button title="Delete" onPress={onDelete} color="red" />
            <Button title="Edit" onPress={onEdit} />
            <Button title="Close" onPress={onClose} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

// Styles for modal layout
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: { fontSize: 20, fontWeight: "bold", marginBottom: 15 },
  description: { marginBottom: 10 },
  statusDetail: { color: "#666", fontWeight: "bold" },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
});