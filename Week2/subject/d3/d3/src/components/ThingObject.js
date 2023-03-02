import { useState } from "react"
import starEmpty from "../image/star-empty.png"
import starFill from  "../image/star-fill.png"
import personImage from "../image/person.jpg"

const ThingObject = () => {
    const [contact, setContact] = useState({
        fullName: "John Doe",
        email: "john@doe.com",
        phoneNumber: "111-111-1111",
        isFavorite: false
    })

    const startIcon =  contact.isFavorite ? starFill : starEmpty;

    const toggleFav = () => {
        setContact(prevState => {
            return {
                ...prevState,
                isFavorite: !prevState.isFavorite
            }
        })
    }

    return (
        <main>
            <article className="card">
                {/* {
                    conditionally rendering.
                    !contact.email ? <span style={{color: "black"}}>Hello</span> : <span style={{color: "black"}}>World</span>
                } */}
                <img className="card--image" src={personImage} alt=""/>
                <div className="card--info">
                    <img className="card--favorite" src={startIcon} alt="" onClick={toggleFav}/>
                    <h2 className="card--name">{contact.fullName}</h2>
                    <p className="card--contact">{contact.phoneNumber}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
            </article>
        </main>
    )
}
export default ThingObject