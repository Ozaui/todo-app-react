import React, { useState } from "react";
import "./App.css";
import CreateToDo from "./components/CreateToDo";
import ToDoList from "./components/ToDoList";

function App() {
  const [list, setList] = useState([]);
  const [toDo, setToDo] = useState("");

  const addToDo = (newToDo) => {
    if (newToDo.trim()) {
      const item = {
        id: Math.floor(Math.random() * 99999),
        text: newToDo,
      };
      setList((prev) => [...prev, item]);
    }
  };

  const handleInput = (event) => {
    setToDo(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    addToDo(toDo);
    setToDo("");
  };

  const removeToDo = (id) => {
    setList((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <h1>Todo List App</h1>
      <CreateToDo value={toDo} onChange={handleInput} onClick={handleClick} />
      <ToDoList list={list} onRemove={removeToDo} />
    </div>
  );
}

export default App;
