import React from 'react';
import "./style.css";

// gather other componets
//import otherComponent from "../otherComponent";

const Header = (props) => {
	return(
		<header className="header" {...props}>
			{props.children}
		</header>
	);
}

export default Header;