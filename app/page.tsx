import { getAllTodos } from "@/api";
import AddTask from "./Components/AddTask";
import TodoList from "./Components/TodoList";

export default async function Home() {
  const tasks = await getAllTodos();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-5xl">Todos</h1>
      <input
        type="text"
        className="w-[700px] p-[10px] rounded-md h-[40px] mt-[50px]"
      />
      <AddTask />
      <TodoList tasks={tasks} />
    </main>
  );
}
