import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"

const Header = (props) =>{
	const {branding} = props;
	return(
		<nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
			<div className="container">
				<a href="/" className="navbar-brand">{branding}</a>
				<div>
					<u className="navbar-nav mr-auo">
						<li className="nav-item">
							<Link to="/" className="nav-link"><i className="fas fa-home"></i> Home</Link>
						</li>

						<li className="nav-item">
							<Link to="/contact/add" className="nav-link"><i className="fas fa-plus"></i> Add</Link>
						</li>

						<li className="nav-item">
							<Link to="/about" className="nav-link"><i className="fas fa-question"></i>About</Link>
						</li>
					</u>
				</div>
			</div>
		</nav>
	);
};

Header.defaultProps = {
	branding: "My React App"
}

Header.propTypes = {
	branding: PropTypes.string.isRequired
}

export default Header;