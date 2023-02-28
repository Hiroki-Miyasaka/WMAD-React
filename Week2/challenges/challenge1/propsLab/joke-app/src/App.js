import Joke from "./components/joke.js";
import jokesData from "./data/jokesData.js";

import './App.css';

function App() {


  return (
    <div className="App">
      <div className="joke-list">
        {
          jokesData.map((joke, index) => {
            return(
              <Joke key={index} {...joke} />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
