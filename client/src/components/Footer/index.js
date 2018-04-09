import React from 'react';
import "./style.css";

//creating a footer
const Footer = (props) => {
	return(

		//do I need this div?
		<div className="footer">
			<footer className="text-center">
				<div><p>For issues or questions regarding the website contact the webmaster at alexarobinson19@gmail.com.</p></div>
				<div><p>To contact Wise Brothers, Inc. with questions about their services, please call 407-293-8214 or email us at service@warehouseorlando.com.</p></div>
				<div>&copy;Copyright 2018 Alex Robinson</div>
				<div><p>Most recently updated April 8th, 2018</p></div>
			</footer>
		</div>
	);
}

export default Footer;