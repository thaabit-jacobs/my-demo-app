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


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
