import "./Header.css"
import trollFace from "../../image/troll-face.png"
const Header = () => {
    return (
        <header className="header">
            <img className="header--logo" src={trollFace} alt="troll-face-logo" />
            <h2 className="header--title">Meme Generator</h2>
        </header>
    );
}

export default Header;