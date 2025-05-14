import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

//if statements
const x = 5;
let text = "Goodbye";
if (x < 10) {
  text = "Hello";
}

function Car(props) {
  return <h2>I am a {props.color} Car!</h2>;
}

function Garage() {
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <Car color="red"/>
    </>
  );
}

// function Football() {
//   const shoot = () => {
//     alert("Great Shot!");
//   }

//   return (
//     <button onClick={shoot}>Take the shot!</button>
//   );
// }
function Football() {
  const shoot = (a) => {
    alert(a);
  }

  return (
    <button onClick={() => shoot("Goal!")}>Take the shot!</button>
  );
}

const myFirstelement = (
  //JSX
    <>
    <h1 className="myclass">Hello React!{5 + 5}</h1>
    <ul>
      <li>Apples</li>
      <li>Bananas</li>
      <li>Cherries</li>
    </ul>
    <input type="text" />
    <h1>{text}</h1>
    {/* another expression of if */}
    <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1> 
    <Garage />
    <Football />
    </>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  myFirstelement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
