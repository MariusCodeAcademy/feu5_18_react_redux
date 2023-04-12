// gyvens app wide state
import { createStore } from 'redux';

const initState = { counter: 10, showCounter: true };

// reducer function
function counterReducer(state = initState, action) {
  switch (action.type) {
    case 'TOGGLE':
      return { ...state, showCounter: !state.showCounter };
    case 'UP':
      return { ...state, counter: state.counter + 1 };
    case 'DOWN':
      return { ...state, counter: state.counter - 1 };
    case 'UP_BY':
      return { ...state, counter: state.counter + action.amount };
    default:
      console.warn('action not found');
      return state;
  }
}

// store sukurimas
const store = createStore(counterReducer);

export default store;
