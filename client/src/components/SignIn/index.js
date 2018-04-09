import React from 'react';
import "./style.css";
import {Link} from 'react-router-dom';

const SignIn = (props) => {
	return(
		<div>
			<h1>SIGN IN</h1>
			{props.children}
		</div>
	);
}

export default SignIn;