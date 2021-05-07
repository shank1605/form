import React, { Component } from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import View from './view';
import "./App.css";
const axios = require('axios').default;


const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

 
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};


class Account extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      lastName: null,
      city:null,
      email: null,
      password: null,
      formErrors: {
        firstName: "",
        lastName: "",
        city:"",
        email: "",
        password: ""
      }
    };
  }

  

  


  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      
      
      try {
          const resp =  axios.post('http://localhost:8000/', this.state,{header:{
            'Content-Type':'application/json'}},(req,res)=>console.log(res));

           
          
      } catch (err) {
        
          console.error(err);
      }
     
    } else {
      alert("Form Inavlid")
    }
    alert("form successfully submitted");
    
    
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "firstName":
     
      if(value.length < 3 ){
        formErrors.firstName ="minimum 3 characaters required";
      }
      else if(!isNaN(value)){
        formErrors.firstName = "Enter the alphabets";
      }
      else{
        formErrors.firstName ="";
      }
       break;
    
      case "lastName":
         if(value.length < 3 ){
        formErrors.lastName ="minimum 3 characaters required";
      }
      else if(!isNaN(value)){
        formErrors.lastName = "Enter the alphabets";
      }
      else{
        formErrors.lastName ="";
      }
      break;

      case "city":
        if(!isNaN(value)){
          formErrors.city = "Enter the alphabets";
        }
        else{
          formErrors.city ="";
        }
        break;

      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;

      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value });
  };

  render() {
    const { formErrors } = this.state;
    

    return (
      
      <div className="wrapper">
        
        <Link to={`/ViewData`}><h3 className="view">To View Data</h3></Link>
       
        
        <Switch>
          <Route  exact path="/">
          
          
        <div className="form-wrapper">
          <h1>Sign Up</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input
                className={formErrors.firstName.length > 0 ? "error" : null}
                placeholder="First Name"
                type="text"
                name="firstName"
                noValidate
                
                onChange={this.handleChange}
              />
              {formErrors.firstName.length > 0 && (
                <span className="errorMessage">{formErrors.firstName}</span>
              )}
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input
                className={formErrors.lastName.length > 0 ? "error" : null}
                placeholder="Last Name"
                type="text"
                name="lastName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.lastName.length > 0 && (
                <span className="errorMessage">{formErrors.lastName}</span>
              )}
            </div>
            <div className="city">
              <label htmlFor="city">City</label>
              <input
                className={formErrors.city.length > 0 ? "error" : null}
                placeholder="City"
                type="text"
                name="city"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.city.length > 0 && (
                <span className="errorMessage">{formErrors.city}</span>
              )}
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                className={formErrors.email.length > 0 ? "error" : null}
                placeholder="Email"
                type="email"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                className={formErrors.password.length > 0 ? "error" : null}
                placeholder="Password"
                type="password"
                name="password"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>
            <div className="createAccount">
              <button type="submit">Create Account</button>
              
            </div>
          </form>
        </div>
        </Route>
        
          <Route  path="/ViewData">
            <View/>
          </Route>


        
          
        </Switch>
      </div>
    );
  }
}

export default Account;