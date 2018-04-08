import React from 'react';
import "./style.css";

// gather other componets
//import otherComponent from "../otherComponent";

const Header = (props) => {
	return(
		<div className="header" {...props}>
			{props.children}
		</div>
	);
}

export default Header;