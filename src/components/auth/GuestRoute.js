import React from 'react';
import AuthService from "../../services/AuthService";
import {Route, Redirect} from "react-router-dom";

const GuestRoute = ({component:Component, ...rest}) => {
    const isUserLoggedIn =  () => {
        return true;
    }


    return (
        (!isUserLoggedIn()) ?
              //<h1>{`${}`}</h1>
            <Route component={Component} {...rest}/> 
            :
               //<h1>GİRİŞ YAPILMADI</h1>
            <Redirect
                to={{
                    pathname: "/app"
                }}
            />
    )
}

export default GuestRoute;