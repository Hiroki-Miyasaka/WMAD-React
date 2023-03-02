import { useState } from 'react';

function Counter() {
    const [counter, setCounter] = useState(0);

    const add = () => {
        setCounter((prevValue) => {
            return prevValue + 1
        })
    }

    const substract = () => {
        setCounter((prevValue) => {
            if(prevValue == 0) return prevValue;
            return prevValue - 1
        })
    }

    return (
        <div className='counter'>
            <button className='counter--minus' onClick={substract}>-</button>
            <div className='counter--count'>{counter}</div>
            <button className='counter--plus' onClick={add}>+</button>
        </div>
    );
}

export default Counter;