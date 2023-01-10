import { useState } from "react";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./App.css";

//data structure of todo => [{todoContent: "dafdafa", isCompleted: false}]

//user input todo content => update todos  => pass todos to todoList component for rendering

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <TodoHeader todoHeaderContent={"Todo App"} />
      <TodoInput setTodos={setTodos} />
      <hr />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
