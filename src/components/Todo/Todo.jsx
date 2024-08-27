import React, { useEffect, useState } from "react";
import TodoBody from "./TodoBody";
import styles from "./Todo.module.css";
const Todo = () => {
  const [value, setValue] = useState("");
  const [todo, setTodo] = useState([]);
  const [count, setCount] = useState(0);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const addbtn = () => {
    if (value.trim()) {
      setTodo([...todo, value]);
      setValue("");
      setCount(count+1)
    }
  };
  console.log(todo);

  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.todoHead}>
            <input
              type="text"
              value={value}
              onChange={handleChange}
              className={styles.Input}
            />
          <button onClick={addbtn}>Add</button>
          </div>
          <h3>You  have {count} task(s) to complete</h3>
          <TodoBody todo={todo} setTodo={setTodo} count={count} setCount={setCount} />
        </div>
      </div>
    </>
  );
};

export default Todo;
