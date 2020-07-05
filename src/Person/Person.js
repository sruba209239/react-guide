import React from "react";
import classes from "./Person.css";

const person = (props) => {
  return (
    <div className={classes.Person}>
      <p onClick={props.clickMethod}>
        I am {props.name} and i am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <p>
        <input onChange={props.nameMethod} value={props.name}></input>
      </p>
    </div>
  );
};

export default person;
