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

let user = {
  name: "Thaabit",
  surname: "Jacobs",
  age: 27
}

function Welcome(props){
  return 
    <h1>Hello {props.name} {props.surname} welcome to your first Component you are {props.age} old right</h1>
}

const welcomeThaabit = <Welcome person={user}/>;

ReactDOM.render(
  welcomeThaabit,
  document.getElementById("root")
);

reportWebVitals();
