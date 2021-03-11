import connection from './api/connection';
import React from 'react';

class AuthService {
    constructor() 
    {
    this.state = {
        user : "empty"
    }
    }


    postRegister(values) {
        return connection
               .post('/register',values)
               .then(response => {
                   return response;
               })
    }

    
    postLogin(values){
        console.log(values);
        return connection
               .post('/signin',values)
               .then(response => {
                   return response
               })
    }

    getUser(){
        return connection
                .get('/getUser')
                .then(response =>{
                    return response
                })
    }

    userCheck() {
        return connection
              .get('/getUser')
              .then(response => {
                return response;
              })
              
             
              
              
    
    
    } 
            
            
}

export default new AuthService();