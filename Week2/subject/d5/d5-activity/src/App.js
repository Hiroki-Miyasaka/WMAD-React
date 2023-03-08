import './App.css';
// import WindowTracker from "./components/WindowTracker"
import React, { useState, useEffect } from 'react';
function App() {
  // const [starWarsData, setStarWarsData] = useState({})
  // const [count, setCount] =  useState(1);

  // const [show, setShow] = React.useState(true);

  // const toggleButton = () => {
  //   setShow(prev => !prev);
  // }

  // useEffect(() => {
  //   fetch(`https://swapi.dev/api/people/${count}`)
  //     .then(res => res.json())
  //     .then(data => setStarWarsData(data))
  // }, [count]) //0...1

  return (
    <div className="container">
      {/* <button onClick={() => setCount(prev => prev + 1)}>Fetch Next Data</button> */}
      {/* <p>{count} times clicked</p> */}
      {/* <button className='toggleButton' onClick={toggleButton}>Toggle WindowTracker</button> */}
      {/* {show && <WindowTracker />} */}
      {/* <pre>{JSON.stringify(starWarsData, null, 2)}</pre> */}
    </div>
  );
}

export default App;
