import React, {useState} from 'react'
import { Button } from '@mui/material';
import {TextField} from '@mui/material'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        // prevent default action(refreshing page)
        e.preventDefault();
        if (value) {
            // add todo
            addTodo(value);
            // clear form after submission
            setValue('');
        }
    };
    return (
        <form onSubmit={handleSubmit} className="TodoForm">
        <TextField
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        placeholder='What is the task today?'/>

        <Button onClick={handleSubmit}
        variant="contained"
        className="todo-btn"
        color="error"
        >Add Task
        </Button>
    </form>
    )
}
export default TodoForm;