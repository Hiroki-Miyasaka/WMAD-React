import './App.css';
import ThingElement from './components/ThingElement';
import ThingObject from './components/ThingObject';
import Box from "./components/Box"
import boxData from "./data/boxes"
import { useState } from 'react';

function App(props) {
  const [boxes, setBoxes] = useState(boxData);

  const style = {
    backgroundColor: props.darkMode ? "#222222" : "#ccc"
  }

  const flipCard = (id) => {

    // setBoxes(prevState => {
    //   const newBoxes = [];
    //   for(let i = 0; i < prevState.length; i++){
    //     const currentBox = prevState[i];

    //     if(currentBox.id === id){
    //       const updatedBox = { ...currentBox, on: !currentBox.on }
    //       newBoxes.push(updatedBox)
    //     }else{
    //       newBoxes.push(currentBox)
    //     }
    //   }
    //   return newBoxes
    // })

    setBoxes(prevState => {
      return prevState.map((box) => {
        return box.id == id ? {...box, on: !box.on} : box
      });
    })
  }

  const boxElements = boxes.map(box => (
    <Box 
      key={box.id}
      id={box.id}
      on={box.on}
      onClick={() => flipCard(box.id)}
    />
  ))

  return (
    
    <div className='app' style={style}>
      {/* <ThingObject /> */}
      {/* <ThingElement /> */}
      {/* <Box /> */}
      {boxElements}
    </div>
  );
}

export default App;
