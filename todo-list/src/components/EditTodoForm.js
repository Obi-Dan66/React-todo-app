import React, {useState} from 'react'
import { Button } from '@mui/material';
import {TextField} from '@mui/material';

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        // edit todo
        editTodo(value, task.id);
    };
    return (
        <form onSubmit={handleSubmit} className="TodoForm">
        <TextField
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        placeholder='Update task'/>

        <Button onClick={handleSubmit}
        variant="contained"
        className="todo-btn"
        color="error"
        >Add Task
        </Button>
    </form>
    )
}