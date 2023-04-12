import { createSlice } from '@reduxjs/toolkit';

const initCounterState = { counter: 10, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initCounterState,
  reducers: {
    up(state) {
      // del to kad naudojams 'immer' sita sintakse nemodifikuoja orginalaus state
      state.counter++;
    },
    down(state) {
      state.counter--;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
    upBy(state, action) {
      state.counter += action.payload;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
