import { ADD_TASK, DELETE_TASK, TOGGLE_TASK, SET_FILTER } from '../types/tasks';

const initialState = {
    tasks: [],
    filter: 'all', 
};

const TasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    {
                        id: Date.now(),
                        title: action.payload.title,
                        description: action.payload.description,
                        completed: false,
                    },
                ],
            };
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.payload),
            };
        case TOGGLE_TASK:
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.payload
                        ? { ...task, completed: !task.completed }
                        : task
                ),
            };
        case SET_FILTER:
            return {
                ...state,
                filter: action.payload,
            };
        default:
            return state;
    }
};

export default TasksReducer;
