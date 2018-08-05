import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames"

const TextInput = (props) =>{
	const { label, name, value, placeholder, type, onChange, error} = props;
	
	return(
		<div className="form-group">
			<label htmlFor={name}>{label}</label>
			<input 
				type={type} 
				className={classnames("form-control form-control-lg", {
					"is-invalid": error
				})}
				placeholder={placeholder}
				name={name}
				value={value}
				onChange={onChange}
			/>
			
			{error &&  <div className="invalid-feedback">{error}</div>}
			
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
	label: PropTypes.string.isRequired,
	error: PropTypes.string
}

export default TextInput;