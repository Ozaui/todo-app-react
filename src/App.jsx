import { useState } from "react";
import "./App.css";
import CreateToDo from "./components/CreateToDo";
import ToDoList from "./components/ToDoList";

function App() {
  const [list, setList] = useState([]);

  const addToDo = (newToDo) => {
    setList((prev) => [...prev, newToDo]);
  };

  return (
    <div className="App">
      <h1>Todo List App</h1>
      <CreateToDo addToDo={addToDo} />
      <ToDoList list={list} />
    </div>
  );
}

export default App;
