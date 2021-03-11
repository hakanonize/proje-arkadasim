import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import {toast} from 'react-toastify';
import Divider from '../../components/common/Divider';
import styles from './LoginRegister.module.scss';
import LoadingBox from "../../components/common/LoadingBox";
import RegisterForm from "../../components/auth/RegisterForm";
import LoginForm from '../../components/auth/LoginForm';
import AuthService from '../../services/AuthService';

class Login extends Component {
    constructor(props){
        super(props);
    }
    
    handleLogin = (data) => {
        AuthService.postLogin(data)
                    .then(result => {
                        this.props.history.push("/app");
                        console.log(result);
                    })
    }

    getUser = () => {
        console.log(AuthService.userCheck());
                   
    }

    deneme = () => {
        AuthService.getUser()
                    .then(res => {
                        console.log(res)
                    })
    }
    
    render(){


        return(
            <div className={styles.rCenter}>
                <Container className ={`${styles.wrapper} ${styles.register}`}>

                    <Container className = {styles.content}>
                        <div className={styles['content-grid']}>              
                            <div className= {styles.main}>
                            <LoginForm 
                                onFormSubmit = {this.handleLogin}
                            />
                            </div>
                      <button onClick={this.getUser}>getuser</button>
                        </div>
                    </Container>
                </Container>

            </div>
        )
    }
}

export default Login;