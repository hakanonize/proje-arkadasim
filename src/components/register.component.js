import React, {Component} from 'react';
import axios from 'axios';
import '../public/app.css';

export default class Register extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit         = this.onSubmit.bind(this);
        this.state= {
          username : '',
          password : '',
          email   : ''
        }
        
    }

    onSubmit(e){
      e.preventDefault();
      const user = {
        username: this.state.username,
        password: this.state.password,
        email   : this.state.email
      }
      
      axios.post('http://localhost:5000/register',user)
           .then(res => window.alert(res.data))
           .finally(setTimeout(() => {  window.location = '/search'; }, 700));
      
      
           

      this.setState({
         username : '',
         password : ''
      });

    }


    onChangeUsername(e){
      this.setState({
        username: e.target.value

    });
    }
      
    onChangePassword(e){
      this.setState({
        password: e.target.value
      })
    }

    onChangeEmail(e){
      this.setState({
        email: e.target.value
      })
    }

    render() {
        return ( 
            <div className="register-form">
            <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input 
              type="text"
              required
              className="form-control" 
              value={this.state.username}
              onChange={this.onChangeUsername}
              placeholder="Enter username"/>
            </div>
            <div className="form-group">
              <label>E-Mail</label>
              <input 
              type="email"
              required
              className="form-control" 
              value={this.state.email}
              onChange={this.onChangeEmail}
              placeholder="Enter username"/>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password"
              required
              className="form-control"
              value={this.state.password}
              onChange={this.onChangePassword}
              placeholder="Password"/>
            </div>

            <button type="submit" className="btn btn-primary">Kayıt Ol</button>
          </form>
            </div>
        );
    }
}