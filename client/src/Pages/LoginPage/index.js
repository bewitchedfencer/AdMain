import React from 'react';
import "./style.css";
import Header from "../../components/Header";
import Carousel from "../../components/Carousel";
import Text from "../../components/Text";
import SignIn from "../../components/SignIn";
import Footer from "../../components/Footer";
import {Link} from 'react-router-dom';

const LoginPage = (props) => {
	return(
		<div>
			<Header>Welcome to Wise Brothers!</Header>
			<div className="container-fluid">
				<div className="carousel-holder">
					<Carousel/>
				</div>
				<Text className="news">
					<h1> Latest News from Wise Brothers</h1>
					<p>Wise Brothers, Inc. has implemented a new website for better services to all of our tenants. Please use this site to enter maintenance requests and provide us with feedback.
					</p>
				</Text>
				<SignIn/>
				<Text className="about">
				<p>Wise Brothers, Inc. is a family-owned and operated commercial property management company. We were founded in Central Florida and all of the clients we service are located in central Florida. Wise Brothers, Inc. manages flex-spaces at ABC Business Center, S&amp;W Business Center, Acme Commercial Park, and the North OBT Business Center. 
				</p>
				<p>Please contact us for availability or visit our website at <a src="https://www.warehouseorlando.com">warehouseorlando.com</a>.</p>
				</Text>
				<Footer/>
			</div>
		</div>
	);
}

export default LoginPage;