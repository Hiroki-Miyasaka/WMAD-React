import './App.css';
import React, { useState } from 'react';
import Counter from "./components/Counter"
import LoginForm from './components/LoginForm/LoginForm';

function App() {
  const [isImportant, setIsImportant] = useState(false);
  // let isImportant2 = false;
  // console.log(isImportant);
  // const result = React.useState("Hello");
  // console.log(result[1]);

  const handleClick = () => {
    setIsImportant(!isImportant);
  }

  return (
    <div className="App">
      {/* <h1 className='state--title'>Is State important to know?</h1>
      <div className='state--value' onClick={handleClick}>
        <h1>{isImportant ? "YES" : "NO"}</h1>
      </div> */}

      {/* <Counter /> */}
      <LoginForm />
    </div>
  );
}

export default App;
