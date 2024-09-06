import { createSlice } from '@reduxjs/toolkit';

interface CheckboxState {
  clickCount: number;
}

const initialState: CheckboxState = {
  clickCount: 0,
};

const checkboxSlice = createSlice({
  name: 'checkbox',
  initialState,
  reducers: {
    incrementClick(state) {
      // eslint-disable-next-line no-param-reassign
      state.clickCount += 1;
    },
  },
});

export const { incrementClick } = checkboxSlice.actions;
export default checkboxSlice.reducer;
