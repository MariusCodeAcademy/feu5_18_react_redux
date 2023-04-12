import React from 'react';
import Card from './ui/card/Card';
import { useDispatch, useSelector } from 'react-redux';

function Counter() {
  // nuskaidom redux data
  const counterFromStore = useSelector((state) => state.counter);
  // counterFromStore++ -- read only value

  // inicijuojam pokyti su useDispatch
  const dispatch = useDispatch();
  function upHandler() {
    dispatch({ type: 'UP' });
  }

  function downHandler() {}

  return (
    <Card>
      <h2>Push ups</h2>
      <p className="value">{counterFromStore}</p>
      <div className="control">
        <button onClick={upHandler}>Up</button>
        <button>Down</button>
        <button>Up by 10</button>
      </div>
    </Card>
  );
}

export default Counter;
