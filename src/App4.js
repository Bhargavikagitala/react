import React from "react";
import "./style.css";

class App4 extends React.Component { 
  render() {
    let name = {
      firstName: 'firstName',
      lastName: 'lastName'
    }
    let count = 10;

  return(<React.Fragment>
      <h1>Hello {name.firstName}, {name.lastName}</h1> 
      <p> Your count is {count} </p>
      </React.Fragment>)
  }
}

export default App4; 
