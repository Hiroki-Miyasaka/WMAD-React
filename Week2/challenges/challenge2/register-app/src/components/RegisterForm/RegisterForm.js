import { useState } from "react";
import "./RegisterForm.css";

const RegisterForm = () => {
    const [fullName, setFullName] = useState("");
    const [fullNameError, setFullNameError] = useState("Please enter your fullname");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("Please enter a email");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("Password must contain at least 8 characters, including at least 1 uppercase letter, 1 lowercase letter, and 1 number");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("The password that match the password field")


    //fullName
    const handleFullNameError = () => {
        if(!fullName) setFullNameError("FullName is required");
        else setFullNameError("");
        console.log(fullName);
    }

    const handleFullNameChange = (e) => {
        setFullName(e.target.value);
    }

    //email
    const validateEmail = (email) => {
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return regex.test(email);
    }

    const handleEmailError = () => {
        if(!email) setEmailError("Email is required");
        else if(!validateEmail(email)) setEmailError("Please enter a valid email address");
        else setEmailError("");
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }


    //password
    const validatePassword = (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        return regex.test(password);
    }

    const handlePasswordError = () => {
        if(!password) setPasswordError("Password is required");
        else if(validatePassword(password)) setPasswordError("");
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    //confirm password
    const validateConfirmPassword = (confirmPassword) => confirmPassword === password;

    const handleConfirmPasswordError = () => {
        if(!confirmPassword) setConfirmPasswordError("Confirm password id required");
        else if(validateConfirmPassword(confirmPassword)) setConfirmPasswordError("");
    }

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    }



    return (
        <form>
            <div className="form-field">
                <label htmlFor="fullName">FullName</label>
                <input 
                type="text" 
                id="fullName" 
                value={fullName} 
                onChange={handleFullNameChange}
                onBlur={handleFullNameError}
                required/>
                <span>{fullNameError}</span>
            </div>
            <div className="form-field">
                <label htmlFor="email">Email</label>
                <input 
                type="email" 
                id="email" 
                value={email} 
                onChange={handleEmailChange}
                onBlur={handleEmailError}
                required/>
                <span>{emailError}</span>
            </div>
            <div className="form-field">
                <label htmlFor="password">Password</label>
                <input 
                type="password" 
                id="password" 
                value={password} 
                onChange={handlePasswordChange}
                onBlur={handlePasswordError}
                required/>
                <span>{passwordError}</span>
            </div>
            <div className="form-field">
                <label htmlFor="confirm-password">ConfirmPassword</label>
                <input 
                type="password" 
                id="confirm-password" 
                value={confirmPassword} 
                onChange={handleConfirmPasswordChange}
                onBlur={handleConfirmPasswordError}
                required/>
                <span>{confirmPasswordError}</span>
            </div>
            <div className="form-field">
                <button type="submit">Register</button>
            </div>
        </form>
    );
}

export default RegisterForm;