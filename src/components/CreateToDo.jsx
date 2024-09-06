import React, { useState } from "react";

function CreateToDo({ addToDo }) {
  const [toDo, setToDo] = useState(``);

  const handleInput = (event) => {
    setToDo(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    addToDo(toDo);
    setToDo("");
  };
  return (
    <div className="create-to-do">
      <h3 className="create-h3">Add new todo</h3>
      <input className="create-input" onChange={handleInput} value={toDo} />
      <button className="create-button" onClick={handleClick}>
        Add
      </button>
    </div>
  );
}

export default CreateToDo;
