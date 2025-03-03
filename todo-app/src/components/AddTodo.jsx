import React from 'react'
import {useDispatch} from 'react-redux';
import {addTodo} from '../slices/todo/todoSlice';

const AddTodo = () => {
    const [input, setInput] = React.useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {                
        e.preventDefault();
        dispatch(addTodo(input));
        console.log(input);
        setInput('');
    }
  return (
    <form onSubmit={handleSubmit}>
        <h1>TODO App</h1>
        <h2>Todo List</h2>
        <input 
        type="text" 
        placeholder="Add a new todo"
        value={input}
        onChange={e=>setInput(e.target.value)} />
        <button>Submit</button> 
    </form>
  )
}

export default AddTodo