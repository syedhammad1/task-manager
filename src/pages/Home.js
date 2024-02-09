import React from 'react'
import AddTaskForm from '../components/taskForm';
import TaskList from '../components/taskList';
import styles from './Home.module.css'
function Home() {
    return (
        <div className={styles.TContainer}>
            <div className={styles.taskFormC}>
                <AddTaskForm />
            </div>
            <div className={styles.taskListC}>
                <TaskList />
            </div>


        </div>

    )
}

export default Home