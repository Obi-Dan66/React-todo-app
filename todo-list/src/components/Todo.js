import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
export const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => {

    return (
        <div className="Todo">
            <p className={`${task.completed ? 'completed' : ""}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
            <div>
            <EditIcon onClick={() => editTodo(task.id)} />
            <DeleteIcon onClick={() => deleteTodo(task.id)} />
            </div>
        </div>
    )
}