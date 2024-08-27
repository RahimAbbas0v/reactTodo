import React, { useState } from "react";
import styles from "./Todo.module.css";

const TodoBody = ({ todo, setTodo, count, setCount }) => {
  const [editIndex, setEditIndex] = useState(null);
  const [selected, setSelected] = useState([]);
  const deleteTodo = (index) => {
    const wasSelected = selected.includes(index);
   setTodo([...todo.filter((_, i) => i !== index)]);
    setSelected([...selected.filter((i) => i !== index)]);
    if (!wasSelected) {
      setCount(count - 1);
    }

  };

  const editTodo = (index) => {
    setEditIndex(editIndex === index ? null : index);
  };

  const handleChange = (e, index) => {
    const newTodos = [...todo];
    newTodos[index] = e.target.value;
    setTodo(newTodos);
  };

  const toggleIndex = (index) => {
    const wasSelected = selected.includes(index);
    const updated = wasSelected
      ? selected.filter((i) => i !== index)
      : [...selected, index];

    setSelected(updated);
    if (updated.length > selected.length) {
      setCount(count - 1);
    } else {
      setCount(count + 1);
    }
  };

  return (
    <ul className={styles.list}>
      {todo.map((e, index) => (
        <li key={index} className={styles.line}>
          <div className={styles.row}>
          {editIndex === index ? (
            <input
              type="text"
              value={e}
              onChange={(e) => handleChange(e, index)}
            />
          ) : (
            <p
              className={selected.includes(index) ? styles.lineThrough : null}
              onClick={() => toggleIndex(index)}
            >
              {e}
            </p>
          )}
          <div className={styles.btns}>
            <button onClick={() => editTodo(index)}>
              {editIndex === index ? "Save" : "Edit"}
            </button>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </div></div>
        </li>
      ))}
    </ul>
  );
};

export default TodoBody;
