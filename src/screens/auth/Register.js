import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import {toast} from 'react-toastify';
import Divider from '../../components/common/Divider';
import styles from './LoginRegister.module.scss';
import LoadingBox from "../../components/common/LoadingBox";
import RegisterForm from "../../components/auth/RegisterForm";
import AuthService from "../../services/AuthService";

class Register extends Component {
    constructor(props){
        super(props);
        
    }
    
    handleFormSubmit = (data) => {
        AuthService.postRegister(data)
                    .then((result) => {
                        this.props.history.push("/login")
                        console.log(result);
                    })
                    .catch(err => {
                        console.log(err);
                    })
    }

    render(){


        return(
            <div className = {styles.rCenter}>
                <Container className ={`${styles.wrapper} ${styles.register}`}>

                    <Container className = {styles.content}>
                        <div className={styles['content-grid']}>

                        
                            <div className= {styles.main}>
                            <RegisterForm 
                             onFormSubmit={this.handleFormSubmit}
                            />
                            </div>

                        </div>
                    </Container>
                </Container>

            </div>
        )
    }
}

export default Register;