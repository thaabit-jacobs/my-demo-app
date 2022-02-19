import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let user = {
  firstName:"Thaabit",
  lastName:"Jacobs",
}

function formatter(user){
  return user.firstName + " " + user.lastName;
}

let counter = 0;

const element = (
  <div>
    <h1>Hello {formatter(user)}</h1>
    <h2>Good to see you here.</h2>
  </div>
);

/*
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  const counterElment = (
    <div>
      <h1>Current Count: {++counter}</h1>
    </div>
  )
  
  ReactDOM.render(
    counterElment,
    document.getElementById("root")
  );
})
*/

/*
class Welcome extends React.Component{
  render () {
    return <h1>Hello {this.props.name} welcome to your first Component</h1>
  }
}
*/

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

function App(){
  return (
    <div>
<Clock />
<Clock />
<Clock />
<Clock />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


reportWebVitals();
