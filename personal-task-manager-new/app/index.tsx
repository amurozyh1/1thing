import { useState } from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import { Task } from "../types";
import { initialTasks } from "../constants/initialTasks";
import TaskItem from "../components/TaskItem";
import AddTaskModal from "../components/AddTaskModal";
import ViewTaskModal from "../components/ViewTaskModal";
import EditTaskModal from "../components/EditTaskModal";
import { TextInput } from "react-native";


export default function Home() {
  // Task state
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [currentTask, setCurrentTask] = useState<Task | null>(null);

  // Modal states
  const [isAddModalVisible, setAddModalVisible] = useState(false);
  const [isViewModalVisible, setViewModalVisible] = useState(false);
  const [isEditModalVisible, setEditModalVisible] = useState(false);

  // Form input states
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  // Record search text
  const [searchText, setSearchText] = useState("");

  // Add new task
  const handleAddTask = () => {
    if (!newTitle.trim()) return;
    const newTask: Task = {
      id: Date.now().toString(),
      title: newTitle,
      description: newDescription,
      status: "pending",
    };
    setTasks((prev) => [newTask, ...prev]);
    setNewTitle("");
    setNewDescription("");
    setAddModalVisible(false);
  };

  // Open view modal
  const handleViewTask = (task: Task) => {
    setCurrentTask(task);
    setViewModalVisible(true);
  };

  // Delete task
  const handleDeleteTask = () => {
    if (!currentTask) return;
    setTasks((prev) => prev.filter((t) => t.id !== currentTask.id));
    setViewModalVisible(false);
  };

  // Switch to edit mode
  const startEditing = () => {
    if (!currentTask) return;
    setNewTitle(currentTask.title);
    setNewDescription(currentTask.description);
    setViewModalVisible(false);
    setEditModalVisible(true);
  };

  // Save edits
  const handleEditTask = () => {
    if (!currentTask) return;
    setTasks((prev) =>
      prev.map((task) =>
        task.id === currentTask.id
          ? { ...task, title: newTitle, description: newDescription }
          : task
      )
    );
    setEditModalVisible(false);
  };

  // Toggle pending/completed
  const toggleTaskStatus = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              status: task.status === "pending" ? "completed" : "pending",
            }
          : task
      )
    );
  };

  // Filter tasks based on search text (case-insensitive title match)
  /*const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchText.toLowerCase())
  );*/


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Tasks</Text>
        <Button title="Add Task" onPress={() => setAddModalVisible(true)} />
      </View>

      <TextInput
        placeholder="Search tasks..."
        value={searchText}
        onChangeText={setSearchText}
        style={styles.searchInput}
      />

      {(searchText ? filteredTasks : tasks).length ? (
        <FlatList
          // Show filtered tasks if there's search text, otherwise show all
          data={searchText ? filteredTasks : tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskItem
              task={item}
              onPress={handleViewTask}
              onToggleStatus={toggleTaskStatus}
            />
          )}
        />
      ) : (
        <Text style={styles.emptyText}>No tasks found.</Text>
      )}


      <AddTaskModal
        visible={isAddModalVisible}
        title={newTitle}
        description={newDescription}
        onChangeTitle={setNewTitle}
        onChangeDescription={setNewDescription}
        onAdd={handleAddTask}
        onCancel={() => setAddModalVisible(false)}
      />

      <ViewTaskModal
        visible={isViewModalVisible}
        task={currentTask}
        onDelete={handleDeleteTask}
        onEdit={startEditing}
        onClose={() => setViewModalVisible(false)}
      />

      <EditTaskModal
        visible={isEditModalVisible}
        title={newTitle}
        description={newDescription}
        onChangeTitle={setNewTitle}
        onChangeDescription={setNewDescription}
        onSave={handleEditTask}
        onCancel={() => setEditModalVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 50,
  },
  headerTitle: { fontSize: 24, fontWeight: "bold" },
  emptyText: { textAlign: "center", marginTop: 50, color: "#666" },

  //Style for search bar
  /*searchInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
  },*/
  
});
