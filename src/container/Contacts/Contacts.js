import React, {Component} from "react";
import Contact from "../Contact/Contact";

class Contacts extends Component{
	constructor(){
		super();
		this.state = {
			contacts: [
				{id: 1, name: "John Doe", email: "john@gmail.com", phone: "555-234-6789"},
				{id: 2, name: "Jane Smith", email: "jane@gmail.com", phone: "555-333-9999"},
				{id: 3, name: "Elizabeth Arsher", email: "eliza@gmail.com", phone: "555-222-4444"}
			]
		}
	}

	deleteContact = (id) =>{
		const { contacts } = this.state;
		const new_contacts = contacts.filter(contact => contact.id !== id);

		this.setState({contacts: new_contacts});
	}

	render(){
		const { contacts } = this.state;
		let temp_contacts = contacts.map(contact =>{
			return (<Contact key={contact.id} contact={contact} deleteClickHandler={() => this.deleteContact(contact.id)} />)
		});

		return(
			temp_contacts
		);
	};
};

export default Contacts;