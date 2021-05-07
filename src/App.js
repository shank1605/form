import React  from "react";
import "./App.css";
import Account from './account.js';

import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";



function App(){
  return (
    <Router>
       
          
       
       <Route path='/' component={Account}/>
       

    </Router>
  )

  
}

export default App;