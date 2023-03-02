app.js

```js
import React from "react"

export default function App() {
    /**
     * Challenge: 
     * Add functionality to the minus button
     */
    const [count, setCount] = React.useState(0)
    
    function add() {
        setCount(count + 1)

        /**
         * Note: if you ever need the old value of state
         * to help you determine the new value of state,
         * you should pass a callback function to your
         * state setter function instead of using
         * state directly. This callback function will
         * receive the old value of state as its parameter,
         * which you can then use to determine your new
         * value of state.
        */

        // callback function will return oldValue
        // setCount(function(oldValue) {
        //     return oldValue + 1
        // })

        //  setCount(oldValue => oldValue + 1)

    }
    
    function subtract() {
        setCount(count - 1)
    }
    
    return (
        <div className="counter">
            <button className="counter--minus" onClick={subtract}>–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={add}>+</button>
        </div>
    )
}
```

styles.css

```css
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    background-color: #262626;
    color: #D9D9D9;
    padding: 20px;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.counter {
    display: flex;
    align-items: flex-end;
}

.counter > button {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    background-color: #737373;
    color: #D9D9D9;
    font-size: 1.5rem;
}

.counter > button:hover {
    background-color: #404040;
    color: #D9D9D9;
}

.counter > button:focus {
    outline: none;
}

.counter--count {
    background-color: white;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #262626;
}

.counter--plus {
    margin-left: -20px;
}

.counter--minus {
    margin-right: -20px;
    z-index: 1;
}
```