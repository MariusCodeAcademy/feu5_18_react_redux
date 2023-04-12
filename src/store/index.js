// gyvens app wide state
import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './_counter';
import authReducer from './_auth';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

// console.log('counterSlice.actions ===', counterSlice.actions);

export default store;
