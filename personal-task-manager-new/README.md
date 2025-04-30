Personal Task Manager App

This is a simple task management mobile application built using React Native, TypeScript, and Expo.
It allows users to add, view, edit, delete, and toggle the status of tasks (between pending and completed).

📦 Project Structure

app/
├── _layout.tsx
├── +html.tsx
├── +not-found.tsx
├── index.tsx
└── modal.tsx

components/
├── AddTaskModal.tsx
├── EditTaskModal.tsx
├── TaskItem.tsx
├── ViewTaskModal.tsx
└── (other auto-generated UI/test files)

constants/
└── initialTasks.ts

types/
└── types.ts

assets/
└── fonts/, images/

README.md
package.json
app.json

🚀 Features

✅ Add tasks with a title and description
✅ Edit existing tasks
✅ View full task details
✅ Delete tasks
✅ Toggle status between pending and completed
✅ Modal-based UI and organized folder structure

🛠 Tech Stack

React Native (with Expo)
TypeScript
React Hooks
Modal-based UI components
FlatList for rendering tasks

🧑‍💻 Setup Instructions

Clone the Repository
git clone https://github.com/amurozyh1/1thing.git
cd 1thing

Install Dependencies
Make sure you have node and expo-cli installed. Then run:
npm install

Start the App
npx expo start

This will launch Expo Dev Tools in your browser.
You can scan the QR code with the Expo Go app on your phone or run it in a simulator.

👤 Author

Yinhao Zhao
GitHub Repository: https://github.com/amurozyh1/1thing.git

📄 License

This project is for demonstration and educational purposes only.