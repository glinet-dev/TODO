import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo } from '../slices/todo/todoSlice';
import styles from './Todos.module.scss'; // Import the SCSS module

const Todos = () => {
  const todoList = useSelector((state) => state.todoList); // Access the state
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <p className={styles.title}>Added List of Items</p>
      <div className={styles.todoList}>
        {todoList?.map((todo) => (
          <div key={todo.id} className={styles.todoItem}>
            <p className={styles.todoText}>{todo?.title}</p>
            <button
              onClick={() => dispatch(deleteTodo({ id: todo.id }))}
              className={styles.deleteButton}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todos;