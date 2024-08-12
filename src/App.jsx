import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// For multiple elements
const Person = (props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Last Name: {props.lastName}</h2>
      <h2>Age: {props.age}</h2>
    </>
  );
};

// for few elements
const Person2 = ({ name, lastName, age }) => {
  return (
    <>
      <h1>Name: {name}</h1>
      <h2>Last Name: {lastName}</h2>
      <h2>Age: {age}</h2>
    </>
  );
};

const App = () => {
  return (
    <div className="App">
      <Person name={"Timmy"} lastName={"Feds"} age={30} />
      <Person2 name={"Micheal"} lastName={"Dave"} age={29} />
      <Person />
      <Person />
      <Person />
    </div>
  );
};

export default App;
