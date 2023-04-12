// gyvens app wide state
import { createStore } from 'redux';

const initState = { counter: 10 };

// reducer function
function counterReducer(state = initState, action) {
  console.log('state ===', state);
  console.log('action ===', action);
  if (action.type === 'UP') {
    return { counter: state.counter + 1 };
  }
  return state; // switch
}

// store sukurimas
const store = createStore(counterReducer);

export default store;
