import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: []
};

export const slice = createSlice({
  name: 'HomeState',
  initialState,
  reducers: {
    test: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { test } = slice.actions;
export const selectHomeData = (state) => state.Home.data;
export default slice.reducer;
