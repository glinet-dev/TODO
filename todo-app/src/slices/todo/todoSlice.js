//  you need only 1 methods to form slices.- createSlice

import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todoList: [{id: "1", title: "todo1", completed: false}],
    // status: "idle",
    // error: null
    };

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo(state, action) {
            // state.todoList.push(action.payload);
            const todo = {
                id: nanoid(),
                title: action.payload.title,
                completed: false
            }
            state.todoList.push(todo);
        },
        deleteTodo(state, action) {
            const { id } = action.payload;
            state.todoList = state.todoList.filter((todo) => todo.id !== id);
        },
        updateTodo(state,action){
            const {id} = action.payload;
            const todo = state.todoList.find((todo=>todo?.id === id));
            if(todo){
                todo.completed = !todo.completed;
            }else{
                console.log("error");
            }
        }

    },// properties and function- with their declaration and definition
});
export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions; 
// the functionalities is exported to be used in other files
export default todoSlice.reducer;