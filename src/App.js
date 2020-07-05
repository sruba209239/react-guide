import React, { Component } from "react";
import classes from "./App.css";
// import "./Person/Person.css";
import Person from "./Person/Person";
// import styled from "styled-components";

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
    let persons = null;
    let btnClass = [classes.Button];

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
      btnClass.push(classes.Red);
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    console.log(classes);

    return (
      <div className={classes.App}>
        <h1>Hi. This is a react App</h1>
        <p className={assignedClasses.join(' ')}>Is it working ?</p>
        <button className={btnClass.join(' ')} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
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
