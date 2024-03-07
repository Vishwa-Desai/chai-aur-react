import { configureStore } from '@reduxjs/toolkit';
import { todoReducer } from '../feature/todo/todoslice';

console.log(todoReducer)
export const store = configureStore({
    reducer: todoReducer
})

