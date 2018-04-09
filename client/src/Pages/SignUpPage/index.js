import React from 'react';
import "./style.css";
import SignUp from "../../components/SignUp"
// gather other componets
//import otherComponent from "../otherComponent";

const SignUpPage = (props) => {
	return(
		<div className="container-fluid">
			<div>
				<SignUp/>
			</div>
		</div>
	);
}

export default SignUpPage;