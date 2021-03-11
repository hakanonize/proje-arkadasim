import './assets/scss/app.scss';

import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container} from "react-bootstrap";
import Navbar from "./components/navbar.component";
import Register from './screens/auth/Register'
import Login from './screens/auth/Login'
import {createBrowserHistory} from 'history';
import Dashboard from './screens/dashboard';
import GuestRoute from './components/auth/GuestRoute';
import ProtectedRoute from './components/auth/ProtectedRoute';

const history = createBrowserHistory();

function App(props) {
  return (
    
    <Container fluid className= "main-wrapper">
        <Router history={history}>
             <Switch>
                  <GuestRoute path="/login" exact component = {Login} />
                  <GuestRoute path="/register" exact component = {Register} />
                  <ProtectedRoute path="/app" component={Dashboard}  />
                  <Redirect to={'/login'}/>
              </Switch>
        </Router>
    
    </Container>
  );
}

export default App;
