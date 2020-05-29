import React, { Component } from "react";
import "./App.css";
import "./Person/Person.css";
import Person from "./Person/Person";

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
    const myStyle = {
      backgroundColor: "lightgreen",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

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
          {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />

          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} clickMethod={this.switchNameHandler.bind(this, 'name2')} nameMethod={this.setNameHandler}>My hobbies are racing</Person>

          <Person name={this.state.persons[2].name} age={this.state.persons[2].age} /> */}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi. This is a react App</h1>
        <p>Is it working ?</p>
        <button style={myStyle} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>{" "}
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
