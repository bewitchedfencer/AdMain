import React from 'react';
import "./style.css";
import {Link} from "react-router-dom";
import {Navbar, NavItem} from 'react-bootstrap';

// gather other componets
//import otherComponent from "../otherComponent";

const NavbarMain = (props) => {
	return(
		<Navbar className="fixedTop container-fluid">
			<Navbar.Brand>
				<Link to="/tenantHome">Wise Brothers, Inc.</Link>
			</Navbar.Brand>
			{/* these hrefs in all of the navbars are stand-ins */}
			<NavItem eventKey={1} href="/submitMain">Submit a Maintenance Request</NavItem>
			<NavItem eventKey={2} href="/viewSites">View Site Inspections</NavItem>
			<NavItem eventKey={3} href="/today">To Do Today</NavItem>
			<NavItem eventKey={4} href="/warehouses">Warehouses</NavItem>
			{props.children}
		</Navbar>
	);
}

export default NavbarMain;