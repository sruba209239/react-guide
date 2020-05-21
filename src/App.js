import React, { Component } from 'react';
import './App.css';
import './Person/Person.css';
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: 'Sruba', age: 30 },
      { name: 'Pinki', age: 26 },
      { name: 'Bubu', age: 24 }
    ],
    other: 'other state'
  }

  switchNameHandler = (newName) => {
    let newPersons = this.state.persons.slice();
    newPersons[0].name = newName;
    newPersons[2].age = 27;
    this.setState({
      persons: newPersons
    });
  }

  setNameHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Sruba', age: 30 },
        { name: event.target.value, age: 26 },
        { name: 'Bubu', age: 24 }
      ]
    });
  }

  render() { 
    return (
      <div className="App">
        <h1>Hi. This is a react App</h1>
        <p>Is it working ?</p>
        <button onClick={() => this.switchNameHandler('name3')}>Switch Name</button> {/* this may be inefficient*/}

        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} clickMethod={this.switchNameHandler.bind(this, 'name2')} nameMethod={this.setNameHandler}>My hobbies are racing</Person>
        
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
        
        <p>{this.state.other}</p>
      </div>
    );
    // return React.createElement('div', null, 'h1', 'Hi this is a react code');
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hi this is a react code'));
  }
}

export default App;
