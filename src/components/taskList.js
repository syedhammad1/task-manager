// TaskList.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, toggleTask, setFilter } from '../redux/actions/tasks'; 
import styles from './taskList.module.css'

const TaskList = () => {
    const tasks = useSelector(state => {
        if (state.filter === 'completed') {
            return state.tasks.filter(task => task.completed);
        } else if (state.filter === 'active') {
            return state.tasks.filter(task => !task.completed);
        } else {
            return state.tasks;
        }
    });
    const dispatch = useDispatch();

    return (
        <div>
            <div className={styles.filterBtn}>
                <button onClick={() => dispatch(setFilter('all'))}>All</button>
                <button onClick={() => dispatch(setFilter('active'))}>Active</button>
                <button onClick={() => dispatch(setFilter('completed'))}>Completed</button>
            </div>
            <div className={styles.taskListContainer} >
            <ul style={{listStyleType:"none"}}>
                {tasks && tasks.length > 0 && tasks.map((task) => (
                    <li key={task.id}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            className={styles.customCheckbox}
                            onChange={() => dispatch(toggleTask(task.id))}
                        />
                        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                            {task.title} - {task.description}
                        </span>
                        <i class="material-icons"  onClick={() => dispatch(deleteTask(task.id))}>delete</i>
                    </li>
                ))}
            </ul>
            </div>

        </div>
    );
};

export default TaskList;
