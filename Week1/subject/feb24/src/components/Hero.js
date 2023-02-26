import heroImage from "../assets/images/hero/grid-hero.png";

export default function Hero(){
    return (
        <section className="hero">
            <img src={heroImage} alt="" className="hero--image"/>
            <h1 className="hero--title">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}