import React, { Component } from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

import "./App.css";
const axios = require('axios').default;


       
class View extends Component {
    constructor() {
      super();
  
      this.state = {
         input:[]
        
       
        };
      }
    
  componentDidMount(){
    const input= axios.get('http://localhost:8000/view')
      .then( response=> {
       
       this.setState({input: response.data});
       console.log(this.state.input);
      })

    
  }
    

    
  
  
    
  
    render() {
      
      
  
      return (
        <div className="form-wrapper">
         
          <h1>Details</h1>
          
          {this.state.input.map((r2)=>(
             <thead>
                  <tr key={r2.id}>
        <tr>
          <td>Firstname:&nbsp;&nbsp;&nbsp;&nbsp;{r2.firstName}</td>
          </tr>
          <tr>
          <td>Lastname:&nbsp;&nbsp;&nbsp;&nbsp;{r2.lastName}</td>
          </tr>
          <tr>
          <td>City:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{r2.city}</td>
          </tr>
          <tr>
          <td>Email:&nbsp;&nbsp;&nbsp;&nbsp;{r2.email}</td>
          </tr>
          <tr>
          <td>Password:&nbsp;&nbsp;&nbsp;&nbsp;{r2.password}</td>
          </tr>
          </tr>
        -------------------------------------------------------  
          
        
        </thead>
        ))}
          
          
          </div>
         

      );
    }
  }
       
        
   



      
      
        
 
      
        
    






export default View;