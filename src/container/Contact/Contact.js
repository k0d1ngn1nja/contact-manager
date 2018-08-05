import React, {Component} from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { Consumer } from "../context";

class Contact extends Component{
	state = {
		showContactInfo: false
	}

	onShowClick = () =>{
		this.setState({showContactInfo: !this.state.showContactInfo})
	}

	onClickDelete = async (id, dispatch) =>{
		await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
		dispatch({type: "Delete_Contact", payload: id});
	}

	render(){
		const {id, name, email, phone} = this.props.contact;
		const {showContactInfo} = this.state;

		return(
			<Consumer>
				{
					value =>{
						const {dispatch} = value;

						return(
							<div className="card card-body mb-3">
								<h4>{name} 
									<i
										style={{cursor: "pointer"}}
										onClick={this.onShowClick} 
										className="fas fa-sort-down">
									</i>

									<i 
										onClick={() => this.onClickDelete(id, dispatch)}
										className="fas fa-times" 
										style={{cursor: "pointer", float: "right", color: "red"}}>
									</i>
								</h4>
								{
									showContactInfo ? 
									<ul className="list-group">
										<li className="list-group-item">Email: {email}</li>
										<li className="list-group-item">Phone: {phone}</li>
									</ul>
									: null
								}
							</div>
						);
					}
				}
			</Consumer>
		);
	};
};

Contact.propTypes = {
	contact: PropTypes.object.isRequired
}

export default Contact;