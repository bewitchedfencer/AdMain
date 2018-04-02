import React from 'react';
import "./style.css";

//creates a button that will spread the props that are passed to it.
const Button = (props) => {
	return(
		<div>
			<button {...props}>{props.buttonName}</button>
		</div>
	);
}

export default Button;