import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi. This is a react App</h1>
        <p>Is it working ?</p>
        <Person name="Sruba" age="28"/>
        <Person name="Pinki" age="25">My hobbies are racing</Person>
        <Person name="Bubu" age="24"/>
      </div>
    );
    // return React.createElement('div', null, 'h1', 'Hi this is a react code');
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hi this is a react code'));
  }
}

export default App;
