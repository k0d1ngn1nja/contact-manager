import React, { Component } from 'react';
import Contacts from "./Contacts/Contacts";
import AddContact from "./Contact/AddContact";
import Header from "../component/Layouts/Navigation/Header";
import {Provider} from "./context";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

class App extends Component {
  render() {
    return (
    	<Provider>
	      <div className="App">
	      	<Header branding="Contact Manager" />
	      	<div className="container">
	      		<div className="row">
		      		<div className="col-md-9">
								<AddContact />
								<Contacts />
		      		</div>
	      		</div>
	        </div>
	      </div>
	    </Provider>
    );
  }
}

export default App;
