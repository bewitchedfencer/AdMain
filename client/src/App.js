import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import axios from 'axios';

import LoginBox from './components/LoginBox';
import SignUp from "./components/SignUp";
import NavbarMain from "./components/NavbarMain";
import NavbarTenant from "./components/NavbarTenant";

import MainMain from "./Pages/MainMain";
import TenantMain from "./Pages/TenantMain";
import AdminMain from "./Pages/AdminMain";
import LoginPage from './Pages/LoginPage';


class App extends Component {
  state = {
    username: "",
    password: "",
    auth: {
      userId:"",
      username:"",
      isAuthenticated:false,
      userType:"tenant"
    },
  };

  componentWillMount(){
    axios.get("/auth/isAuthenticated").then((result)=>{
      const {userId, isAuthenticated,username, userType} = result.data
      this.setState({
        auth:{
          userId,
          isAuthenticated,
          userType,
          username
        }
      });
    });
  }

  handleChange = (event) => {
    const {name, value} = event.target;    
        // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    //call a sign In function
    const newUser = {
      username: this.state.username,
      password: this.state.password
    };
    this.setState({
      username: "",
      password: ""
    }); 
    const {name} = event.target;
    axios.post(name, newUser).then((data) => {
      if (data.data.isAuthenticated){
        const {userId, isAuthenticated,username, userType} = data.data;
        this.setState({
          auth:{
            userId,
            isAuthenticated,
            userType,
            username
          }
        });
      }
    });
  }

  handleLogout = (event) => {
    event.preventDefault();
    axios.get("/auth/logout").then((result)=>{
      this.setState({
        auth:{
          userId: "",
          username: "",
          isAuthenticated: false
        }
      });
    })
  };

  render() {
    const loggedIn = this.state.auth.isAuthenticated;
    return (
      <Router>
        <div>
        <Route exact path = "/" render = {()=> {
          if(loggedIn){
            return <Redirect to = "/home" />
          } 
          else{
            return <LoginPage><LoginBox 
              handleChange= {this.handleChange} 
              handleSubmit = {this.handleSubmit}
              email = {this.state.email}
              password = {this.state.password}
            /></LoginPage>
          } 
        }}/>
        <Route exact path = "/signup" render = {()=> {
          if(loggedIn){
            return <Redirect to = "/home" />
          } else{
            return <SignUp 
              handleChange= {this.handleChange} 
              handleSubmit = {this.handleSubmit}
              email = {this.state.email}
              password = {this.state.password}
            />
          }  
        }}/>
        <Route exact path = "/home" render = {()=> {
          if(!loggedIn){
            return <Redirect to = "/" />
          } else if(this.state.userType==="maintenance"){
            return <MainMain><NavbarMain><button className="pullRight" onClick={this.handleLogout} auth = {this.state.auth}>Log Out</button></NavbarMain></MainMain>
          }
          else{
            // use ternary operator or case switch with the different user types to render the 
            // different home pages. All of the home pages should be unique. 
            return <TenantMain><NavbarTenant><button className="pullRight" onClick={this.handleLogout} auth = {this.state.auth}>Log Out</button></NavbarTenant></TenantMain>
          } 

        }
        }/>
          {/* from Eric's version  return <Home handleLogout = {this.handleLogout} auth = { this.state.auth }/> */}

        
        </div>
      </Router>
    );
  }
}

export default App;