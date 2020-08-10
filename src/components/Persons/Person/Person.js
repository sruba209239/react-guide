import React, { Component, Fragment } from "react";
import classes from "./Person.css";
import withClass from "../../../hoc/withClass";
// import { Aux } from "../../../hoc/Auxiliary";

class Person extends Component {
  render() {
    console.log("[Person.js] rendering...");
    return (
      // <div className={classes.Person}>
      <Fragment>
        <p key="item1" onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p key="item2">{this.props.children}</p>
        <input
          key="item3"
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Fragment>
      // </div>
    );
  }
}

export default withClass(Person, classes.Person);
