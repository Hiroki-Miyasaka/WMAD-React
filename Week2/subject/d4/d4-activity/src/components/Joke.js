// import { useState } from "react";
 
// const Joke = ({id, setup, punchLine}) => {
//     const [isShown, setIsShown] = useState(false)

//     const toggleShown = () => {
//         setIsShown(prevState => !prevState)
//     }

//     return (
//         <div>
//             {(setup && punchLine) && 
//             <div>
//                 <h3>{setup}</h3>
//                 {isShown && <p>{punchLine}</p>}
//                 <button onClick={toggleShown}> 
//                     {isShown ? "Hide" : "Show"} Punchline 
//                 </button>
//                 <hr/>
//             </div>
//             }
//         </div>
//     );
// }

// export default Joke;