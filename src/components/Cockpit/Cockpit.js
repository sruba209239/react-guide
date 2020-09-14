import React, { useEffect, useRef, useContext } from 'react';

import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = props => {
  const btnClickRef = useRef(null);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    btnClickRef.current.click();

    return () => {
      console.log('[Cockpit.js] return method (cleanup) in useEffect');
    }
  }, []); // this useEffect is called once on load

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] 2nd return method (cleanup) in useEffect');
    }
  });


  const assignedClasses = [];
  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button
        className={btnClass}
        ref={btnClickRef}
        onClick={props.clicked}>Toggle Persons</button>
      {/* <AuthContext.Consumer>
        {context => <button onClick={context.login}>Log in</button>}
      </AuthContext.Consumer> */}
      <button onClick={authContext.login}>Log in</button>
    </div>
  );
};

export default React.memo(cockpit);