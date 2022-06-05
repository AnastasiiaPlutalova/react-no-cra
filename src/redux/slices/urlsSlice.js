import { createSlice } from '@reduxjs/toolkit';

export const urlsSlice = createSlice({
  name: 'urls',
  initialState: {
    value: [],
  },
  reducers: {
    addUrl: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUrl } = urlsSlice.actions;

export default urlsSlice.reducer;
