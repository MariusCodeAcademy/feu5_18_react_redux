// gyvens app wide state
import { createSlice, configureStore } from '@reduxjs/toolkit';

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

const initAuthState = { isAuthenticated: false };

const authSlice = createSlice({
  name: 'authentication',
  initialState: initAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

// store sukurimas
// const store = createStore(counterReducer);
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

// console.log('counterSlice.actions ===', counterSlice.actions);
export const authActions = authSlice.actions;
export const counterActions = counterSlice.actions;
export default store;
