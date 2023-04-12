// gyvens app wide state
import { createStore } from 'redux';

const initState = { counter: 10 };

// reducer function
function counterReducer(state = initState, action) {
  switch (action.type) {
    case 'UP':
      return { counter: state.counter + 1 };
    case 'DOWN':
      return { counter: state.counter - 1 };
    case 'UP_BY':
      return { counter: state.counter + action.amount };
    default:
      console.warn('action not found');
      return state;
  }
}

// store sukurimas
const store = createStore(counterReducer);

export default store;
