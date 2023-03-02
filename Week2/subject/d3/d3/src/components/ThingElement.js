import { useState } from 'react';

const ThingElement = () => {
    const [thingsArray, setThingsArray] = useState(["Thing 1"])

    const thingsElements =  thingsArray.map((element, index) => {
        return <p key={index}>{element}</p>
    })

    const add = () => {
        setThingsArray(prevState => {
        return [...prevState, `Thing ${prevState.length + 1}`]
        })
    }
    
    return (
        <div className="App">
          <button onClick={add}>Add Things</button>
          {thingsElements}
        </div>
      );
}

export default ThingElement;