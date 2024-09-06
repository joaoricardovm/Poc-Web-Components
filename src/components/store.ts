import { configureStore } from '@reduxjs/toolkit';
import checkboxReducer from './checkboxSlice.js';

export const store = configureStore({
  reducer: {
    checkbox: checkboxReducer,
  },
});
window.store = store;
export default store;
