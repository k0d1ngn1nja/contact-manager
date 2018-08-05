import React, { Component } from 'react';
import Contacts from "./Contacts/Contacts";
import AddContact from "./Contact/AddContact";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Header from "../component/Layouts/Navigation/Header";
import About from "../component/StaticPages/About";
import {Provider} from "./context";

import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

class App extends Component {
  render() {
    return (
    	<Provider>
    		<Router>
		      <div className="App">
		      	<Header branding="Contact Manager" />
		      	<div className="container">
		      		<div className="row">
			      		<div className="col-md-9">
			      			<Switch>
			      				<Route exact path="/" component={Contacts} />
			      				<Route exact path="/contact/add" component={AddContact} />
			      				<Route exact path="/about" component={About} />
									</Switch>
			      		</div>
		      		</div>
		        </div>
		      </div>
	      </Router>
	    </Provider>
    );
  }
}

export default App;
