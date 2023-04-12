import React from 'react';
import Card from './ui/card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../store';

function Counter() {
  // nuskaidom redux data
  const counterFromStore = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
  // counterFromStore++ -- read only value

  // inicijuojam pokyti su useDispatch
  const dispatch = useDispatch();
  function upHandler() {
    // dispatch({ type: 'UP' });
    dispatch(counterActions.up()); // { type: 'unikalus id' }
  }

  function downHandler() {
    dispatch(counterActions.down());
  }

  function upBy(howMuch) {
    // dispatch({ type: 'UP_BY', amount: howMuch });
    dispatch(counterActions.upBy(howMuch)); //  { type: 'unikalus id', payload: howMuch }
  }

  function toggle() {
    dispatch(counterActions.toggle());
  }

  return (
    <Card>
      {show && (
        <>
          <h2>Push ups</h2>
          <p className="value">{counterFromStore}</p>
        </>
      )}
      <div className="control">
        <button onClick={upHandler}>Up</button>
        <button onClick={downHandler}>Down</button>
        <button onClick={() => upBy(10)}>Up by 10</button>
      </div>
      <button onClick={toggle}>Toggle Counter</button>
    </Card>
  );
}

export default Counter;
