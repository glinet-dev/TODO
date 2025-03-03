// configure store 
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../slices/todo/todoSlice';
// Export a variable using this method
// configure Store usualy make use of object inside

export const store = configureStore({
    reducer:todoReducer
});