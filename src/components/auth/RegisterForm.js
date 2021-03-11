import React, {Component, Fragment} from 'react';
import {useForm} from "react-hook-form";
import {Container, Form, Alert, Row, Col,Button} from "react-bootstrap";
import InputText from "../common/InputText";
import Divider from "../common/Divider";


const RegisterForm = (props) => {
    const {register,handleSubmit , watch , errors} = useForm();

    const rules = {
        userName: {
            required: 'User name is required.'
        },
        email: {
            required: 'Email is required.',
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address."
            }
        },
        password: {
            required: 'Password is required.',
            minLength: {
                value: 8,
                message: 'Minimum password length is 8 characters.'
            }
        },
        passwordConfirm: {
            required: 'Password is required.',
            minLength: {
                value: 8,
                message: 'Minimum password length is 8 characters.'
            }
        },
    }
    

    const onSubmit = data => {
        props.onFormSubmit(data);
    }


        return(
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Row>
                        <Col>
                        <Form.Group>

                            <InputText type = "bordered" inputType="text" name="username" label="Username"
                             placeholder ="Username"
                             ref={register(rules.userName)} />
                            {errors.username &&
                            <Alert variant='danger'>
                                {errors.username?.type === 'required' && rules.userName.required}
                            </Alert>
                            }
                            
                        </Form.Group>
                        </Col>
                        
                    </Row>

                    <Row>
                        <Col>
                        <Form.Group>

                            <InputText type = "bordered" inputType="text" name="email" label="E-mail"
                             placeholder ="E-mail"
                             ref={register(rules.email)} />
                            
                            {errors.email &&
                            <Alert variant='danger'>
                                {errors.email?.type === 'required' && rules.email.required}
                            </Alert>
                            }
                            
                        </Form.Group>
                        </Col>
                        
                    </Row>

                    <Row>
                        <Col>
                        <Form.Group>
                            <InputText type = "bordered" inputType="text" name="password" label="Password" 
                            placeholder="Password"
                            ref={register(rules.password)}
                            />
                            {errors.password &&
                            <Alert variant='danger'>
                                {errors.password?.type === 'required' && rules.password.required}
                                {errors.password?.type === 'minLength' && rules.password.minLength.message}
                            </Alert>
                            }
                        </Form.Group>
                        </Col>
                    </Row>  
                    <Row>
                        <Col>
                        <Form.Group>
                            <InputText type = "bordered" inputType="text" name="confirm_password" label="Password Confirm" 
                            placeholder="Password Confirm"
                            ref={register(rules.passwordConfirm)}
                            />
                            {errors.confirm_password &&
                            <Alert variant='danger'>
                                {errors.confirm_password?.type === 'required' && rules.passwordConfirm.required}
                                {errors.confirm_password?.type === 'minLength' && rules.passwordConfirm.minLength.message}
                            </Alert>
                            }
                        </Form.Group>
                        </Col>
                    </Row>  
                    <Divider spacing={50}/>

                    <Button type='submit' variant = "outline-primary">
                        Sign Up
                    </Button>
                </div>
            </form>
                
            
        )
}


export default RegisterForm;