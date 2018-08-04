import React, { Component } from "react";
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
		contacts: [
			{id: 1, name: "John Doe", email: "john@gmail.com", phone: "555-234-6789"},
			{id: 2, name: "Jane Smith", email: "jane@gmail.com", phone: "555-333-9999"},
			{id: 3, name: "Elizabeth Arsher", email: "eliza@gmail.com", phone: "555-222-4444"}
		],

		dispatch: action => this.setState(state => Reducer(state, action))
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