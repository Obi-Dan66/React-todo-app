import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
    name: "todos",
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        },
        deleteTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload);
        },
        toggleComplete: (state, action) => {
            const index = state.findIndex((todo) => todo.id === action.payload);
            state[index].completed = !state[index].completed;
        },
        editTodo: (state, action) => {
            const index = state.findIndex((todo) => todo.id === action.payload.id);
            state[index].isEditing = !state[index].isEditing;
        },
        editTask: (state, action) => {
            const index = state.findIndex((todo) => todo.id === action.payload.id);
            state[index].task = action.payload.task;
            state[index].isEditing = !state[index].isEditing;
        },
    },
});

export const { addTodo, deleteTodo, toggleComplete, editTodo, editTask } =
    todosSlice.actions;

export const todosReducer = todosSlice.reducer;