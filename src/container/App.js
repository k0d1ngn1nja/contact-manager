import React, { Component } from 'react';
import Contact from "./Contact/Contact";
import Header from "../component/Navigation/Header";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Header branding="Contact Manager" />
        <Contact name="John Doe" email="johndoe@gmail.com" phone="555-123-6789"/>
      </div>
    );
  }
}

export default App;
