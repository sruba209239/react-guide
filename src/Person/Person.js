import React from "react";
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 15px;
  text-align: center;
  @media (min-width: 500px) {
    width: 450px
  }
`;

// let myStyle = {
//   '@media(min-width:500px)': {
//     width: '450px'
//   }
// };
const person = (props) => {
  return (
    <StyledDiv>
      {/* <div className="Person"> */}
      <p onClick={props.clickMethod}>
        I am {props.name} and i am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <p>
        <input onChange={props.nameMethod} value={props.name}></input>
      </p>
      {/* </div> */}
    </StyledDiv>
  );
};

export default person;
