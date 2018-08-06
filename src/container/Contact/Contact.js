import React, {Component} from "react";
// import axios from "axios";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import { Consumer } from "../context";

class Contact extends Component{
	state = {
		showContactInfo: false
	}

	onShowClick = () =>{
		this.setState({showContactInfo: !this.state.showContactInfo})
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

									<Link to={`contact/edit/${id}`}>
										<i className="fas fa-pencil-alt" style={{cursor: "pointer", float: "right", color: "#000", marginRight: "0.5rem", marginLeft: "1rem", fontSize: "15px"}}></i>
									</Link>

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