import React from 'react';
import AuthService from "../../services/AuthService";
import {Route, Redirect} from "react-router-dom";

const ProtectedRoute = ( { component: Component, ...rest}) => {

    const isUserLoggedIn = () => {
        return true;
    }

    return (
        (isUserLoggedIn()) ?
        
          //<h1>Deneme</h1>
             <Route component={Component} {...rest}/>
            :
              //<h1>GİRİŞ YAPILMADI</h1>
            <Redirect
                to={{
                    pathname: "/login"
                }}
            />
    )
}

export default ProtectedRoute;