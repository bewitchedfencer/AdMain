import React from 'react';
import "./style.css";
import {Navbar, NavItem} from "react-bootstrap";
import {Link} from "react-router-dom";
// gather other componets
//import otherComponent from "../otherComponent";

const NavbarTenant = (props) => {
	// console.log("we're here", props.children); for debugging
	return(
		<Navbar className="fixedTop container-fluid">
			<Navbar.Brand>
				<Link to="/tenantHome">Wise Brothers, Inc.</Link>
			</Navbar.Brand>
			<NavItem eventKey={1} href="/submitMain">Submit a Maintenance Request</NavItem>
			<button className="pullRight" onClick={props.name} auth = {props.dataAuth}>Log Out</button>
		</Navbar>
	);
}

export default NavbarTenant;