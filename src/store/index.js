// gyvens app wide state
import { createSlice, configureStore } from '@reduxjs/toolkit';

import counterReducer from './_counter';

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
    counter: counterReducer,
    auth: authSlice.reducer,
  },
});

// console.log('counterSlice.actions ===', counterSlice.actions);
export const authActions = authSlice.actions;

export default store;
