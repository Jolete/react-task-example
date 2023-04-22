import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";

function App() {
  return (
    <main className="bg-zing-900 h-screen">
      <div className="container mx-auto p-10">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}

export default App;
