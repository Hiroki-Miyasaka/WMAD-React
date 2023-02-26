import cardImage from "../assets/images/card/card1.png"
import star from "../assets/images/icon/star.png";

export default function Card({title, price, country, isSoldOut, img}){
    return( 
        <div className="card">
            <div className={`card--badge ${isSoldOut ? "show" : "hide"}`} >SOLD OUT</div>
            <img src={img} alt="" className="card--image"/>
            <div className="card--stats">
                <img src={star} alt="" className="card--icon"/>
                <span>5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">{country}</span>
            </div>
            <p>{title}</p>
            <p><span className="bold">From ${price}</span> / person</p>
        </div>
    );
}

// let obj = {name: "Kubilay", age: 18};
// const { name, age } = obj;
// name 
// age