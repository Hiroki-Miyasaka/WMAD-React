import React from "react"

export default function App(props) {

/*
 * Challenge: Convert this stateful function component to class based components
 */

    const [goOut, setGoOut] = React.useState("Yes")
    
    function toggleGoOut() {
        setGoOut(prevState => {
            return prevState === "Yes" ? "No" : "Yes"
        })
    }
    
    return (
        <div className="state">
            <h1 className="state--title">Should I go out tonight?</h1>
            <div className="state--value" onClick={toggleGoOut}>
                <h1>{goOut}</h1>
            </div>
        </div>
    )
}

//class component

import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goOut: "Yes"
    };
    this.toggleGoOut = this.toggleGoOut.bind(this);
  }

  toggleGoOut(func) {
    this.setState(prevState => ({
      goOut: func(prevState.goOut)
    }));
  }

  render() {
    return (
      <div className="state">
        <h1 className="state--title">Should I go out tonight?</h1>
        <div className="state--value" onClick={() => this.toggleGoOut(goOut => goOut === "Yes" ? "No" : "Yes")}>
          <h1>{this.state.goOut}</h1>
        </div>
      </div>
    );
  }
}


import React from "react"

/**
 * Challenge: Convert this stateful function component
 * to a stateful class component. At the end, everything
 * should work exactly the way it does now.
 * 
 * 1. Change the syntax to a class component
 * 2. Declare state in the class component that
 *    can hold the value of `count`
 * 3. Update the add and subtract methods so you won't
 *    get the error about calling `setState` on undefined
 * 4. Update the values in the render method to account
 *    for the changeover to a class component
 */

export default function App() {
    const [count, setCount] = React.useState(0)
    
    function add() {
        setCount(prevCount => prevCount + 1)
    }
    
    function subtract() {
        setCount(prevCount => prevCount - 1)
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


//class component

import React from "react"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.add = this.add.bind(this)
    this.subtract = this.subtract.bind(this)
  }

  add() {
    this.setState(prevState => ({ count: prevState.count + 1 }))
  }

  subtract() {
    this.setState(prevState => ({ count: prevState.count - 1 }))
  }

  render() {
    return (
      <div className="counter">
        <button className="counter--minus" onClick={this.subtract}>–</button>
        <div className="counter--count">
          <h1>{this.state.count}</h1>
        </div>
        <button className="counter--plus" onClick={this.add}>+</button>
      </div>
    )
  }
}




