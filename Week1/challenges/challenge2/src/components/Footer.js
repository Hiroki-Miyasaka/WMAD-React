import Facebook from "../assets/images/Facebook Icon.png";
import GitHub from "../assets/images/GitHub Icon.png";
import Instagram from "../assets/images/Instagram Icon.png";
import Linkedin from "../assets/images/Linkedin Icon.png";
import Twitter from "../assets/images/Twitter Icon.png";

export default function Footer(){
    return(
        <footer>
            <img src={Twitter} alt="Twitter icon"/>
            <img src={Facebook} alt="Facebook icon" />
            <img src={Instagram} alt="Instagram icon"/>
            <img src={Linkedin} alt="Linkedin icon"/>
            <img src={GitHub} alt="GitHub icon"/>
        </footer>
    )
}