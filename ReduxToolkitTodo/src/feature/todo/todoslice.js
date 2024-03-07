import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id:1,task:'Hello world'}]
}

const todoSlice = createSlice({
        name: 'todo',
        initialState,
        reducers: {
            addToDo: (state,action)=>{
                const todo = {
                    id: nanoid(),
                    task: action.payload
                }
                state.todos.push(todo)
            },
            deleteToDo: (state,action)=>{
                state.todos = state.todos.filter((todo)=> todo.id!== action.payload)
            }
        }

})

export const {addToDo,deleteToDo} = todoSlice.actions;
export const todoReducer = todoSlice.reducer;