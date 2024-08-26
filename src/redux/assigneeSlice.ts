import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Assignee {
    assigneeId: string;
    fullName: string;
    profileImage: string;
}

interface AssigneeState {
    assignees: Assignee[];
}

const initialState: AssigneeState = {
    assignees: typeof window !== 'undefined' && localStorage.getItem('assignees')
        ? JSON.parse(localStorage.getItem('assignees')!)
        : [],
};

const assigneeSlice = createSlice({
    name: 'assignees',
    initialState,
    reducers: {
        addAssignee: (state, action: PayloadAction<Assignee>) => {
            state.assignees.push(action.payload);
            localStorage.setItem('assignees', JSON.stringify(state.assignees));
        },
    },
});

export const { addAssignee } = assigneeSlice.actions;

export { assigneeSlice };
