import logo from "../assets/images/logo.png"

export default function Header(){
    return (
        <nav>
            <img src={logo} alt="logo image" className="nav--logo" />
        </nav>
    )
}