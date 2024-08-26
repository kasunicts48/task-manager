import { configureStore } from '@reduxjs/toolkit';
import { taskSlice } from './taskSlice';
import { assigneeSlice } from './assigneeSlice';

export const store = configureStore({
    reducer: {
        tasks: taskSlice.reducer,
        assignees: assigneeSlice.reducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
