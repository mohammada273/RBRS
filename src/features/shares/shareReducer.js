import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

const initialState = {
} 

export const slice = createSlice({
    name: 'shareReducer',
    initialState, 
    reducers: {
        test: (state, action) => {
            state = action.payload
        },
    }
})

export const {test} = slice.actions;
export default slice.reducer;