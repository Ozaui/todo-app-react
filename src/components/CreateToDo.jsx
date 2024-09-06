import React from "react";

function CreateToDo({ value, onChange, onClick }) {
  return (
    <div className="create-to-do">
      <h3 className="create-h3">Add new todo</h3>
      <input className="create-input" onChange={onChange} value={value} />
      <button className="create-button" onClick={onClick}>
        Add
      </button>
    </div>
  );
}

export default CreateToDo;
