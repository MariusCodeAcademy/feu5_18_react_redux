import React from 'react';
import Card from './ui/card/Card';
import { useDispatch, useSelector } from 'react-redux';

function Counter() {
  // nuskaidom redux data
  const counterFromStore = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);
  // counterFromStore++ -- read only value

  // inicijuojam pokyti su useDispatch
  const dispatch = useDispatch();
  function upHandler() {
    dispatch({ type: 'UP' });
  }

  function downHandler() {
    dispatch({ type: 'DOWN' });
  }

  function upBy(howMuch) {
    dispatch({ type: 'UP_BY', amount: howMuch });
  }

  function toggle() {
    dispatch({ type: 'TOGGLE' });
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
