import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, superduper } from "../../actions/actions.js";

const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.count);

    const handleIncrement = () => {
        dispatch(increment())
    }

    const handleDecrement = () => {
        dispatch(decrement())
    }

    const handleMagicIncrement = () => {
      dispatch(superduper());
    }


  return (
    <>
        <div>Counter {count}</div>
        <button onClick={handleIncrement}>Increment</button>
        <br />
        <button onClick={handleDecrement}>Decrement</button>
        <br />
        <button onClick={handleMagicIncrement}>Increase with magic</button>
    </>
  )
}

export default Counter