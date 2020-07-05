import React, { Component } from "react";
import "./App.css";
// import "./Person/Person.css";
import Person from "./Person/Person";
import styled from "styled-components";

const StyledButton = styled.button`
    background-color: ${props => props.alt ? 'red' : 'green'};
    color: white;
    font: inherit;
    border: 1px solid blue;
    padding: 8px;
    cursor: pointer;

    &:hover {
      background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
      color: black;
    }
    `

class App extends Component {
  state = {
    persons: [
      { id: "saa", name: "Sruba", age: 30 },
      { id: "dsd", name: "Pinki", age: 26 },
      { id: "fdf", name: "Bubu", age: 24 },
    ],
    other: "other state",
    showPersons: false,
  };

  deletePersonHandler = (index) => {
    const persons = this.state.persons.slice(0);
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };

  setNameHandler = (event, id) => {
    const personIndex = this.state.person.findIndex((item) => item.id === id);
    const person = {
      ...this.state.person[personIndex],
    };
    // const person = Object.assign({}, this.state.person[personIndex]);
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });
  };

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons,
    });
  };

  render() {
    // const myStyle = {
    //   backgroundColor: "green",
    //   color: 'white',
    //   font: "inherit",
    //   border: "1px solid blue",
    //   padding: "8px",
    //   cursor: "pointer",
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   }
    // };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                clickMethod={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                nameMethod={(event) => this.setNameHandler(event, person.id)}
              />
            );
          })}
        </div>
      );

      // myStyle.backgroundColor = "red";
      // myStyle[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi. This is a react App</h1>
        <p className={classes.join(' ')}>Is it working ?</p>
        <StyledButton alt={this.state.showPersons} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </StyledButton>
        {/* this may be inefficient*/}
        {persons}
        <p>{this.state.other}</p>
      </div>
    );
    // return React.createElement('div', null, 'h1', 'Hi this is a react code');
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hi this is a react code'));
  }
}

export default App;
