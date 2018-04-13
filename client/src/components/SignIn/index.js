import React from 'react';
import "./style.css";

const SignIn = (props) => {
	return(
		<div>
			<h1>SIGN IN</h1>
			{props.children}
		</div>
	);
}

export default SignIn;