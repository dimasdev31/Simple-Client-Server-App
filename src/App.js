import React from 'react'
import logo from './logo.svg'
import './App.css'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      token: ''
    };
  }

  componentDidMount() {
    this.timer = setInterval(
      () => this.sendPayload(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  generateToken(length) {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    var result = ''
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length))
    }
    return result
  }


  sendPayload() {

    this.setState({
      counter: this.state.counter + 1
    })

    const requestOptions = {
      method: 'POST',
      headers: { 
        'X-Random': this.generateToken(10),        
      },
      body: JSON.stringify({ counter: this.state.counter })
    }

    fetch('http://localhost/server_side/index.php/post', requestOptions)     
 
  }
  

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.counter}.</h2>
      </div>
    );
  }
}


export default App;
