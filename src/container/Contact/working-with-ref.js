import React, {Component} from "react";
import PropTypes from "prop-types";
import { Consumer } from "../context";

class AddContact extends Component{
	constructor(props){
		super(props);

		this.nameInput = React.createRef();
		this.emailInput = React.createRef();
		this.phoneInput = React.createRef();
	}

	static defaultProps = {
		name: "Default Name",
		email: "default@gmail.com",
		phone: "000-111-2345"
	}

	onInputChange = (e) => this.setState({
		[e.target.name]: e.target.value
	});

	onFormSubmit = (e) =>{
		e.preventDefault();
		const contact = {
			name: this.nameInput.current.value,
			email: this.emailInput.current.value,
			phone: this.phoneInput.current.value
		}

		console.log(contact);
	};

	render(){
		const {name, email, phone} = this.props;

		return(
			<div className="card mb-3">
				<div className="card-header">Add Contact</div>
				<div className="card-body">
					<form onSubmit={this.onFormSubmit}>
						<div className="form-group">
							<label htmlFor="name">Name</label>
							<input 
								type="text" 
								className="form-control form-control-lg"
								placeholder="Enter Name..."
								name="name"
								defaultValue={name}
								ref={this.nameInput}
							/>
						</div>

						<div className="form-group">
							<label htmlFor="email">Email</label>
							<input 
								type="email" 
								className="form-control form-control-lg"
								placeholder="Enter Email..."
								name="email"
								ref={this.emailInput}
								defaultValue={email}
							/>
						</div>

						<div className="form-group">
							<label htmlFor="phone">Phone</label>
							<input 
								type="text" 
								className="form-control form-control-lg"
								placeholder="Enter Phone Number..."
								name="phone"
								ref={this.phoneInput}
								defaultValue={phone}
							/>
						</div>
						<input type="submit" value="Add Contact" className="btn btn-block btn-primary" />
					</form>
				</div>
			</div>
		);
	}
}

AddContact.propTypes = {};

export default AddContact;