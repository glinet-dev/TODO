import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../slices/todo/todoSlice";
import styles from "./AddTodo.module.scss"; // Import the SCSS module

const AddTodo = () => {
  const [input, setInput] = React.useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return; // Prevent empty submissions
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>TODO App</h1>
        <h2 className={styles.subtitle}>Todo List</h2>

        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            placeholder="Add a new todo"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={styles.input}
          />
          <button type="submit" className={styles.button}>
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTodo;