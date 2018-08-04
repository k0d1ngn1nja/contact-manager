import React, {Component} from "react";
import UUID from "uuid";
import TextInput from "../../component/Layouts/Form/TextInput";
import { Consumer } from "../context";

class AddContact extends Component{
	state = {
		name: "",
		email: "",
		phone: ""
	}

	onInputChange = (e) => this.setState({
		[e.target.name]: e.target.value
	});

	onFormSubmit = (dispatch, e) =>{
		e.preventDefault();
		const { name, email, phone } = this.state;
		const _newContact = {id: UUID(), name, email, phone};
		dispatch({type: 'Add_Contact', payload: _newContact});
		
		// Clear State
		this.setState({
			name: "",
			email: "",
			phone: ""
		})
	};

	render(){
		const {name, email, phone} = this.state;

		return(
			<Consumer>
				{value =>{
					const { dispatch } = value;
					return(
						<div className="card mb-3">
							<div className="card-header">Add Contact</div>
							<div className="card-body">
								<form onSubmit={(e) => this.onFormSubmit(dispatch, e)}>
									<TextInput 
										label="Name"
										placeholder="Enter Name..."
										name="name"
										value={name}
										onChange={this.onInputChange}
									/>

									<TextInput 
										label="Email"
										type="email"
										placeholder="Enter Email..."
										name="email"
										value={email}
										onChange={this.onInputChange}
									/>

									<TextInput 
										label="Phone"
										placeholder="Enter Phone..."
										name="phone"
										value={phone}
										onChange={this.onInputChange}
									/>
									<input type="submit" value="Add Contact" className="btn btn-block btn-primary" />
								</form>
							</div>
						</div>
					)
				}}
			</Consumer>
		);
	}
}

export default AddContact;