import { useState } from "react"
import "./RegisterForm.css"
const RegisterForm = () => {
    const [formData, setFormData] = useState(
        {
            email:"",
            password: "",
            passwordConfirm: "",
            joinNewsLetter: false
        }
    );

    const [errors, setErrors] = useState([])

    const handleFormData = (ev) => {
        const {name, value, checked, type} = ev.target;

        setFormData(prevState => {
            return {
                ...prevState,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    const handleSubmit = (ev) => {
        ev.preventDefault();

        setErrors([])

        if(formData.password !== formData.passwordConfirm){
            setErrors(prev => [...prev, {type:"password", message: "Passwords do not match"}])
        }else{
            setErrors(prev => prev.filter(err => err.type !== "password"))
        }

        if(formData.email == ""){
            setErrors(prev => [...prev, {type:"email", message: "Put a email!"}])
        }
        else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email))){
            setErrors(prev => [...prev, {type:"email", message: "Please write a valid email"}])
        }
        else{
            setErrors(prev => prev.filter(err => err.type !== "email"))
        }
    }


    return (
        <div className="form-container">

            <div className="form--error">
                {
                    errors.map(err => {
                        return <p>{err.type} - {err.message}</p>
                    })
                }
            </div>
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input
                    onChange={handleFormData}
                    className="form--input"
                    name="email"
                    type="text"
                    placeholder="Ex. asd@example.com"
                    value={formData.email}
                />
                <label htmlFor="password">Password</label>
                <input 
                    onChange={handleFormData}
                    className="form--input"
                    name="password"
                    type="password"
                    value={formData.password}
                />
                <label htmlFor="passwordConfirm">Confirm Password</label>
                <input 
                    onChange={handleFormData}
                    className="form--input"
                    name="passwordConfirm"
                    type="password"
                    value={formData.passwordConfirm}
                />
                <div className="form--marketing">
                    <input
                        onChange={handleFormData}
                        name="joinNewsLetter"
                        id="newsLetter"
                        type="checkbox"
                        checked={formData.joinNewsLetter}
                    />
                    <label htmlFor="newsLetter">I want to join the newsletter</label>
                </div>

                <button className="form--submit">Submit</button>
            </form>
        </div>
    )
}

export default RegisterForm