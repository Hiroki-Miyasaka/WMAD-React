import { useState } from "react";
import "./LoginForm.css";

const LoginForm = () => {
    const [email,  setEmail] = useState("");
    const [emailError, setEmailError] = useState("Please enter a email");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("Password must contain at least 8 characters, including at least 1 uppercase letter, 1 lowercase letter, and 1 number");

    const validateEmail = (email) => {
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return regex.test(email);
    }

    const handleEmailError = () => {
        if(!email) {
            setEmailError("Email is required");
        }else if (!validateEmail(email)){
            setEmailError("Please enter a valid email address");
        }else{
            setEmailError("");
        }
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const validatePassword = () => {
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return regex.test(password);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handlePasswordError = () => {
        if (validatePassword(password)){
            setPasswordError("");
        }
    }

    return (
        <form>
            <div className="form-group">
                <label for="email">Email</label>
                <input 
                type="email" 
                id="email" 
                value={email} 
                onChange={handleEmailChange}
                onBlur={handleEmailError}
                required/>
                <span>{emailError}</span>
            </div>
            <div className="form-group">
                <label for="password">Password</label>
                <input 
                type="password" 
                id="password" 
                value={password} 
                onChange={handlePasswordChange}
                onBlur={handlePasswordError}
                required/>
                <span>{passwordError}</span>
            </div>
            <div className="form-group">
                <button type="submit">Login</button>
            </div>
        </form>
    );
}

export default LoginForm;