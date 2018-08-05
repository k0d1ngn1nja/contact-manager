import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();
const Reducer = (state, action) =>{
	switch(action.type){
		case 'Delete_Contact':
			return {...state, contacts: state.contacts.filter(contact => contact.id !== action.payload)};
		case 'Add_Contact':
			return {...state, contacts: [action.payload, ...state.contacts]};
		default:
			return state;
	}
};

export class Provider extends Component{
	state = {
		contacts: [],
		dispatch: action => this.setState(state => Reducer(state, action))
	}
	
	componentDidMount(){
		axios.get("https://jsonplaceholder.typicode.com/users").then((res) => this.setState({contacts: res.data}));
	}

	render(){
		return(
			<Context.Provider value={this.state}>
				{this.props.children}
			</Context.Provider>
		);
	}
}

export const Consumer = Context.Consumer;