import React from "react";
import PropTypes from "prop-types";

const Header = (props) =>{
	const {branding} = props;
	return(
		<nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
			<div className="container">
				<a href="/" className="navbar-brand">{branding}</a>
				<div>
					<u className="navbar-nav mr-auo">
						<li className="nav-item">
							<a href="/" className="nav-link">Home</a>
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