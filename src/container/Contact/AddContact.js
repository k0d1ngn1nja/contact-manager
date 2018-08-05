import React, {Component} from "react";
// import UUID from "uuid";
import TextInput from "../../component/Layouts/Form/TextInput";
import { Consumer } from "../context";
import axios from "axios";

class AddContact extends Component{
	state = {
		name: "",
		email: "",
		phone: "",
		errors: {}
	}

	onInputChange = (e) => this.setState({
		[e.target.name]: e.target.value
	});

	onFormSubmit = async (dispatch, e) =>{
		e.preventDefault();
		const { name, email, phone } = this.state;
		const _newContact = {name, email, phone};

		const res = await axios.post("https://jsonplaceholder.typicode.com/users", _newContact);
		dispatch({type: 'Add_Contact', payload: res.data});
		
		if(name === ""){
			this.setState({errors:{
				name: "Name is required"
			}});
			return;
		}

		if(email === ""){
			this.setState({errors:{
				email: "Email is required"
			}});
			return;
		}

		if(phone === ""){
			this.setState({errors:{
				phone: "Phone is required"
			}});
			return;
		}
		// Clear State
		this.setState({
			name: "",
			email: "",
			phone: "",
			errors: {}
		});

		this.props.history.push("/"); //redirect
	};

	render(){
		const {name, email, phone, errors} = this.state;

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
										error={errors.name}
									/>

									<TextInput 
										label="Email"
										type="email"
										placeholder="Enter Email..."
										name="email"
										value={email}
										onChange={this.onInputChange}
										error={errors.email}
									/>

									<TextInput 
										label="Phone"
										placeholder="Enter Phone..."
										name="phone"
										value={phone}
										onChange={this.onInputChange}
										error={errors.phone}
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