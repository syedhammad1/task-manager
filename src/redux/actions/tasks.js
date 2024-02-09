import { ADD_TASK, DELETE_TASK, TOGGLE_TASK, SET_FILTER } from "../types/tasks";

export const addTask = (title, description) => ({
    type: ADD_TASK,
    payload: { title, description },
});

export const deleteTask = (taskId) => ({
    type: DELETE_TASK,
    payload: taskId,
});

export const toggleTask = (taskId) => ({
    type: TOGGLE_TASK,
    payload: taskId,
});

export const setFilter = (filter) => ({
    type: SET_FILTER,
    payload: filter,
});