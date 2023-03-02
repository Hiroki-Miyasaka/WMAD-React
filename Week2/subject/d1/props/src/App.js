import './App.css';
import Contact from "./components/Contact"

import cat1 from "./assets/images/cat1.jpg"
import cat2 from "./assets/images/cat2.jpg"
import cat3 from "./assets/images/cat3.jpg"
import cat4 from "./assets/images/cat4.jpg"

function App() {

  const arr = ["red", "blue", "red", "yellow", "black"];
  // const elementArr = [
  //   <h1>Hello 1</h1>, 
  //   <h2>Hello 2</h2>,
  //   <h3>Hello 3</h3>
  // ]
  const arrElemets = arr.map((item, index) => <p key={index}>{item}</p>)

  return (
    <div className="contacts">
      <Contact img={cat1} name="Mr. Backward" phone="111-111-1111" email="mrbackward@cat.com" />
      <Contact img={cat2} name="Miss Wonderful" phone="222-222-2222" email="misswonderful@cat.com" />
      <Contact img={cat3} name="Catherine" phone="333-333-3333" email="catherine@cat.com" />
      <Contact img={cat4} name="Tigger" phone="444-444-4444" email="tigger@cat.com" />
       
      {/* {
        arr.map(item => {
          return <p>{item}</p>
        })
      } */}
      {
        arrElemets
      }
    </div>
  );
}

export default App;
