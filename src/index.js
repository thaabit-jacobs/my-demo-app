import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let user = {
  fName:"Thaabit",
  lName:"Jacobs",
}

function formatter(user){
  return user.fName + " " + user.lName;
}

const  nameElement  = (
  <h1>
    Hello there, {formatter(user)} welcome to React
  </h1>
);

ReactDOM.render(
  nameElement,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
