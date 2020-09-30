import React, {Component} from 'react';
import axios from 'axios';
import '../public/app.css';

export default class Register extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit         = this.onSubmit.bind(this);
        this.state= {
          username : '',
          password : ''
        }
        
    }

    onSubmit(e){
      e.preventDefault();
      const user = {
        username: this.state.username,
        password: this.state.password
      }
      axios.post('http://localhost:5000/signin',user)
           .then(res => window.alert(res.data));

      this.setState({
         username : '',
         password : '',
         email    : ''
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
              <label>Password</label>
              <input type="password"
              required
              className="form-control"
              value={this.state.password}
              onChange={this.onChangePassword}
              placeholder="Password"/>
            </div>

            <button type="submit" className="btn btn-primary">Giriş Yap</button>
          </form>
            </div>
        );
    }
}