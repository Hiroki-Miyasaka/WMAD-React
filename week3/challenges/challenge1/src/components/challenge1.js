import React from "react"
import ReactDOM from "react-dom"

/*
Challenge:
1. Convert all 3 components to be class-based
2. Fix the small bug
*/

// #1
function App() {
    return (
        <div>
            <Header />
            <Greeting />
        </div>
    )
}


//ClassComponent

class App extends React.Component {
    constructor(props){
        super(props);
        this.state={};
    }

    render(){
        return(
            <div>
                <Header />
                <Greeting />
            </div>
        )
    }
}

// #2
function Header(props) {
    return (
        <header>
            <p>Welcome, {props.username}!</p>
        </header>
    )
}

//ClassComponent

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state={};
    }

    render(){
        return(
            <header>
                <p>Welcome, {this.props.username}!</p>
            </header>
        )
    }
}



// #3
// Hint: any "display logic" can be placed inside the `render`
// method before the `return` statement
function Greeting() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    
    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "night"
    }
    return (
        <h1>Good {timeOfDay} to you, sir or madam!</h1>
    )
}


//ClassComponent

class Greeting extends React.Component{
    constructor(props){
        super(props);
        this.state={ timeOfDay: ""};
    }

    date = new Date();
    hours = this.date.getHours();

    greet(){
        if(hours < 12){
            this.setState({timeOfDay: "morning"});
        } else if(hours >= 12 && hours < 17){
            this.setState({timeOfDay: "afternoon"});
        } else{
            this.setState({timeOfDay: "night"});
        }
    }

    render(){
        return(
            <h1>Good {this.greet()} to you, sir or madam!</h1>
        )
    }
    
}

ReactDOM.render(<App />, document.getElementById("root"))