import './App.css'
import { Component } from 'react'
// function App() {

//   return (
//     <div className="App">
//     </div>
//   )
// }

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    console.log("Component did mount!");
  }

  componentDidUpdate(){
    return false
    // console.log("Component did update!");
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log(nextProps);
    console.log(nextState);
    console.log("Hello");
    return true;
  }

  handleClick = () => {
    this.setState({count: this.state.count + 1})
  }

  render(){
    console.log("Render");
    return (
      <h1 onClick={this.handleClick}>Hello {this.state.count}</h1>
    )
  }
}

export default App
