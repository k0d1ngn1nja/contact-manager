import React, {Component} from "react";
import PropTypes from "prop-types";
import { Consumer } from "../context";

class AddContact extends Component{
	state = {
		name: "",
		email: "",
		phone: ""
	}

	render(){
		const {name, email, phone} = this.state;
		return(
			<div className="card mb-3">
				<div className="card-header">Add Contact</div>
				<div className="card-body">
					<form>
						<div className="form-group">
							<label htmlFor="name">Name</label>
							<input 
								type="text" 
								className="form-control form-control-lg"
								placeholder="Enter Name..."
								name="name"
								value={name}
							/>
						</div>

						<div className="form-group">
							<label htmlFor="email">Email</label>
							<input 
								type="email" 
								className="form-control form-control-lg"
								placeholder="Enter Email..."
								name="email"
								value={email}
							/>
						</div>

						<div className="form-group">
							<label htmlFor="phone">Phone</label>
							<input 
								type="text" 
								className="form-control form-control-lg"
								placeholder="Enter Phone Number..."
								name="phone"
								value={phone}
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