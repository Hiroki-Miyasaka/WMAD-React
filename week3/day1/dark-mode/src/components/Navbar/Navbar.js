import logo from "../../image/logo.png"
import "./Navbar.css"

const Navbar = (props) => {
    return(
        <nav className={props.darkMode && "dark"}>
            <img className="logo--icon" src={logo} alt="" />
            <h3 className="logo--text">ReactFacts</h3>
            <div className="toggler">
                <p className="toggler--light">Light</p>
                <div className="toggler--slider" onClick={props.toggleDarkMode}>
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    )
}

export default Navbar;