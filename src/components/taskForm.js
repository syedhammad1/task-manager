import React, { useState } from 'react';
import { addTask } from '../redux/actions/tasks';
import { useDispatch } from 'react-redux';
import styles from './taskForm.module.css'
const AddTaskForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault();
        if(!title || !description){
            let errMsg = !title ? "Title required" :"Description required"
            alert(errMsg)
            return
        }
        dispatch(addTask(title, description));
        setTitle('');
        setDescription('');
    };

    return (
        <div>
            <h1>Task Manager App</h1>
            <form onSubmit={handleSubmit}>
                <div className={styles.inputContainer}>
                    <input
                        type="text"
                        placeholder="Task title"
                        value={title}
                        className={styles.inputText}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className={styles.inputContainer}>
                    <input
                        type="text"
                        placeholder="Task description"
                        value={description}
                        className={styles.inputText}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                    <button type="submit">Add Task</button>
            </form>
        </div>

    );
};

export default AddTaskForm;
