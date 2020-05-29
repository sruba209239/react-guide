import React from "react";

const person = (props) => {
  return (
    <div className="Person">
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
