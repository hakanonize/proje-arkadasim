import React, {Component} from 'react';
import {Route, Router, Switch, Redirect} from 'react-router-dom';
import NavBar from '../../components/navbar.component';

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        const {path} = this.props.match;

        return (
                <div className='dashboard-content'>
                    <div className='container-fluid content-container'>
                        <Switch>
                            <Route path={`${path}`} exact component={NavBar}/>
                            
                        </Switch>
                        
                    </div>
                </div>
                

        );
    }
}



export default Dashboard;