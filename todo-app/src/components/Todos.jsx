import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import {  deleteTodo } from '../slices/todo/todoSlice'

const Todos = () => {
    const todoList = useSelector( (state) => state?.todoList
    );// we will get access to state inside useSelector
    const dispatch = useDispatch();
    
  return (
    <div>
        <p>Added List of Items</p>
        {todoList?.map((todo) => (
            <div key={todo.id}>
                <p>{todo?.title}</p>
                
                <button onClick={()=>dispatch(deleteTodo({id: todo.id}))}>Delete</button>
            </div>
        ))}
    </div>
  )
}

export default Todos