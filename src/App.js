import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import Register from './components/register.component';
import Signin from './components/signin.component';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar/>
        <Route path='/register' exact component= {Register }/>
        <Route path='/signin' exact component= {Signin} />
      </div>
    </Router>
  );
}

export default App;
