import React from "react";

function ToDoList({ list, onRemove }) {
  return (
    <ul className="todo-list">
      {list.map((item) => (
        <li key={item.id}>
          {item.text}
          <button onClick={() => onRemove(item.id)}>X</button>
        </li>
      ))}
    </ul>
  );
}

export default ToDoList;
