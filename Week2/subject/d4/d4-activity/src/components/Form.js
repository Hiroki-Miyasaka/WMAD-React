import { useState } from "react"

const Form = () => {
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    
    const [formData, setFormData] = useState({
        firstName: "", 
        lastName: "", 
        username: "", 
        password: "", 
        comment: "",
        isSubscribe: false,
        employment: "",
        favColor: ""
    })

    // const [error, setError] = useState([]);
    // delete formData.error;

    const handleData = (event) => {
        const {name, value, checked, type} = event.target;
        setFormData(prevState => {
            return {
                ...prevState,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    const submitForm = (event) => {
        event.preventDefault();
        console.log("Hello world");
        console.log(formData);
        // call api and send my data to backend
    }

    // const handleUsername = (event) => {
    //     setUsername(event.target.value)
    // }

    // const handlePassword = (event) => {
    //     setPassword(event.target.value);
    // }

    // const handleFirstName = (event) => {
    //     setFirstName(event.target.value)
    // }

    // const handleLastName = (event) => {
    //     setLastName(event.target.value);
    // }

    // const handleUsername = (event) => {
    //     setUsername(event.target.value)
    // }

    // const handlePassword = (event) => {
    //     setPassword(event.target.value);
    // }

    // const handleFirstName = (event) => {
    //     setFirstName(event.target.value)
    // }

    // const handleLastName = (event) => {
    //     setLastName(event.target.value);
    // }

    return (
        <form onSubmit={submitForm}>
            <input 
                type="text"  
                placeholder="Username"
                name="username"
                onChange={handleData}
                value={formData.username}
                // onChange={handleUsername}
            />
            {/* <p>{username}</p> */}
            <input 
                type="password"
                onChange={handleData}
                name="password"
                // onChange={handlePassword}
            />
            {/* <p>{password}</p> */}
            <input 
                type="text"
                onChange={handleData}
                name="firstName"
                // onChange={handleFirstName}
            />
            {/* <p>{firstName}</p> */}
            <input 
                type="text"
                onChange={handleData}
                name="lastName"
                // onChange={handleLastName}
            />
            {/* <p>{lastName}</p> */}

            {/* <textarea>asdadasda</textarea> */}
            <textarea
                placeholder="Comment"
                onChange={handleData}
                name="comment"
                value={formData.comment}
            />

            <input 
                type="checkbox" 
                id="isSubscribe" 
                name="isSubscribe" 
                onChange={handleData} 
                checked={formData.isSubscribe} 
            />
            <label htmlFor="isSubscribe">Is Subscribed ?</label>

            <fieldset>
                <legend>Current employment status</legend>
                <input 
                    type="radio" 
                    name="employment" 
                    id="unemployment" 
                    value="unemployment"
                    checked={formData.employment === "unemployment"}
                    onChange={handleData}
                />
                <label htmlFor="unemployment">Unemployed</label>
                <input 
                    type="radio" 
                    name="employment" 
                    id="part-time" 
                    value="part-time"
                    checked={formData.employment === "part-time"}
                    onChange={handleData}
                />
                <label htmlFor="part-time">Part-time</label>
                <input 
                    type="radio" 
                    name="employment" 
                    id="full-time" 
                    value="full-time"
                    checked={formData.employment === "full-time"}
                    onChange={handleData}
                />
                <label htmlFor="full-time">Full-time</label>
            </fieldset>

            <select
                id="favColor"
                name="favColor"
                value={formData.favColor}
                onChange={handleData}
            >
                <option value="" key="empty">-- Choose --</option>
                <option value="red" key="red">Red</option>
                <option value="orange" key="orange">Orange</option>
                <option value="blue" key="blue">Blue</option>
                <option value="green" key="green">Green</option>
            </select>

            {/* <input type="submit" value={"click me"} /> */}
            <button>Submit</button>
        </form>
    );
}

export default Form;