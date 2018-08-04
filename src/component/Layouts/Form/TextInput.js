import React from "react";
import PropTypes from "prop-types";

const TextInput = (props) =>{
	const { label, name, value, placeholder, type, onChange} = props;
	
	return(
		<div className="form-group">
			<label htmlFor={name}>{label}</label>
			<input 
				type={type} 
				className="form-control form-control-lg"
				placeholder={placeholder}
				name={name}
				value={value}
				onChange={onChange}
			/>
		</div>
	);
};

TextInput.defaultProps = {
	type: "text"
}

TextInput.propTypes = {
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	label: PropTypes.string.isRequired
}

export default TextInput;