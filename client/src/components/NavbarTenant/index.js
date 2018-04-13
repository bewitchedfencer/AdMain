import React from 'react';
import "./style.css";

// gather other componets
//import otherComponent from "../otherComponent";

const NavbarTenant = (props) => {
	return(
		<Navbar className="fixedTop container-fluid">
			<Navbar.Brand>
				<Link to="/tenantHome">Wise Brothers, Inc.</Link>
			</Navbar.Brand>
			<NavItem eventKey={1} href="/submitMain">Submit a Maintenance Request</NavItem>
			{props.children}
		</Navbar>
	);
}

export default NavbarTenant;