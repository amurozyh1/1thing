import React from "react";
import { Modal, View, Text, TextInput, Button, StyleSheet } from "react-native";

// Props for EditTaskModal component
interface EditTaskModalProps {
  visible: boolean;
  title: string;
  description: string;
  onChangeTitle: (text: string) => void;
  onChangeDescription: (text: string) => void;
  onSave: () => void;
  onCancel: () => void;
}

// Modal component for editing an existing task
export default function EditTaskModal({
  visible,
  title,
  description,
  onChangeTitle,
  onChangeDescription,
  onSave,
  onCancel,
}: EditTaskModalProps) {
  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Edit Task</Text>
          {/* Title input field */}
          <TextInput
            style={styles.input}
            placeholder="Task Title"
            value={title}
            onChangeText={onChangeTitle}
          />
          {/* Description input field */}
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Description"
            value={description}
            onChangeText={onChangeDescription}
            multiline
          />
          {/* Cancel and Save buttons */}
          <View style={styles.modalButtons}>
            <Button title="Cancel" onPress={onCancel} />
            <Button title="Save" onPress={onSave} />
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
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  textArea: { height: 100, textAlignVertical: "top" },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
});