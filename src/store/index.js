// gyvens app wide state
import { createSlice, configureStore } from '@reduxjs/toolkit';
import { createStore } from 'redux';

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

// reducer function
// function counterReducer(state = initCounterState, action) {
//   switch (action.type) {
//     case 'TOGGLE':
//       return { ...state, showCounter: !state.showCounter };
//     case 'UP':
//       // niekada nemodifikuojam state tiesiogiai
//       // state.counter++ -- not todo
//       return { ...state, counter: state.counter + 1 };
//     case 'DOWN':
//       return { ...state, counter: state.counter - 1 };
//     case 'UP_BY':
//       return { ...state, counter: state.counter + action.amount };
//     default:
//       console.warn('action not found');
//       return state;
//   }
// }

// store sukurimas
// const store = createStore(counterReducer);
const store = configureStore({
  reducer: counterSlice.reducer,
});

// console.log('counterSlice.actions ===', counterSlice.actions);
export const counterActions = counterSlice.actions;
export default store;
