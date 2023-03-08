import './App.css';
// import jokeData from "./data/jokes";
// import Joke from "./components/Joke"
// import Form from "./components/Form"
import RegisterForm from "./components/RegisterForm"
function App() {
  // const jokeElements = jokeData.map(joke => {
  //   return (
  //     <Joke
  //       id={joke.id}
  //       key={joke.id}
  //       setup={joke.setup}
  //       punchLine={joke.punchline}
  //     />
  //   )
  // })
  
  return (
    <div className="App">
      {/* {jokeElements} */}
      {/* <Form /> */}
      <RegisterForm />
    </div>
  );
}

export default App;