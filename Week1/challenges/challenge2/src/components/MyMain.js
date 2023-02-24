import Mail from "../assets/images/Mail.png";

export default function MyMain(){
    return (
        <main className="flex">
            <div className="person-info container flex">
                <h1>Laura Smith</h1>
                <h4>Frontend Developer</h4>
                <p>laurasmith.website</p>
            </div>
            

            <div className="email-area container">
                <button className="flex">
                    <img src={Mail} alt="mail image" />
                    <h2>Email</h2>
                </button>
            </div>
            
            <div className="person-detail container flex">
                <div className="person-detail-item">
                    <h2>About</h2>
                    <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                </div>
                <div className="person-detail-item">
                    <h2>Interests</h2>
                    <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                </div>
            </div>
        </main>
    )
}