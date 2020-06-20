import React from "react";

let myStyle = {
  '@media(min-width:500px)': {
    width: '450px'
  }
};
const person = (props) => {
  return (
    <div className="Person" style={myStyle}>
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
