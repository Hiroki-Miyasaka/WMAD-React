import phoneIcon from "../assets/images/phone.png"
import emailIcon from "../assets/images/email.png"

function Contact({ img, name, phone, email}){
    // const { text } = props;
    return (
        <div className="contact-card">
            <img src={img} alt="contact-card-image" />
            <h3>{name}</h3>
            <div className="info-group">
                <img src={phoneIcon} alt="phone-icon" />
                <p>{phone}</p>
            </div>
            <div className="info-group">
                <img src={emailIcon} alt="email-icon" />
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Contact