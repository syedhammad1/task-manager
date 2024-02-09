import { createStore } from 'redux';
import TasksReducer from './reducers/tasks';
import { loadState, saveState } from './localstorage';

const persistedState = loadState();

const store = createStore(TasksReducer, persistedState);

store.subscribe(() => {
    saveState({
        tasks: store.getState().tasks
    });
});


export default store;
