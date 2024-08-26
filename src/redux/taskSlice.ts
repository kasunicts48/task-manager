import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { randomUUID } from 'crypto';

interface Task {
    taskId: string;
    taskName: string;
    priority: 'Low' | 'Medium' | 'High';
    status: 'Todo' | 'In Progress' | 'Completed';
    dueDate: string;
    description: string;
    assigneeId: string;
}

interface TaskState {
    tasks: Task[];
}

const initialState: TaskState = {
    tasks: typeof window !== 'undefined' && localStorage.getItem('tasks')
        ? JSON.parse(localStorage.getItem('tasks')!)
        : [],
};

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        createTask: (state, action: PayloadAction<Omit<Task, 'taskId'>>) => {
            const newTask = { ...action.payload, taskId: randomUUID() };
            state.tasks.push(newTask);
            localStorage.setItem('tasks', JSON.stringify(state.tasks));
        },
        updateTaskStatus: (
            state,
            action: PayloadAction<{ taskId: string; status: Task['status'] }>
        ) => {
            const task = state.tasks.find((task) => task.taskId === action.payload.taskId);
            if (task) {
                task.status = action.payload.status;
                localStorage.setItem('tasks', JSON.stringify(state.tasks));
            }
        },
        updateTaskDueDate: (
            state,
            action: PayloadAction<{ taskId: string; dueDate: string }>
        ) => {
            const task = state.tasks.find((task) => task.taskId === action.payload.taskId);
            if (task) {
                task.dueDate = action.payload.dueDate;
                localStorage.setItem('tasks', JSON.stringify(state.tasks));
            }
        },
        editTask: (state, action: PayloadAction<Task>) => {
            const index = state.tasks.findIndex((task) => task.taskId === action.payload.taskId);
            if (index !== -1) {
                state.tasks[index] = action.payload;
                localStorage.setItem('tasks', JSON.stringify(state.tasks));
            }
        },
        deleteTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter((task) => task.taskId !== action.payload);
            localStorage.setItem('tasks', JSON.stringify(state.tasks));
        },
    },
});

export const { createTask, updateTaskStatus, updateTaskDueDate, editTask, deleteTask } = taskSlice.actions;

export { taskSlice };
