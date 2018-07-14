import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import {signIn} from '../actions';
import {renderInputs} from '../helpers';

class SignIn extends Component {
    
    handleSignIn(values){
        console.log('Sign In Values:', values);
        this.props.signIn(values);
    }

    render(){
        const {handleSubmit} = this.props;
        return(
            <form onSubmit={handleSubmit(this.handleSignIn.bind(this))}>
                <h1 className='text-center'>Sign In</h1>
                <div className="row">
                    <Field className="col-6 offset-3" name="email" component={renderInputs} label="Email"/>
                </div>
                <div className="row">
                    <Field className="col-6 offset-3" type="password" name="password" component={renderInputs} label="Password"/>
                </div>
                <div className="row">
                    <div className="d-flex col-6 offset-3 justify-content-end">
                        <button className="btn btn-outline-success ">Sign In</button>
                    </div>
                </div>
            </form>
        )
    }
}

function validate(values){
    const{ email, password } = values;
    const errors = {};

    if(!email){
        errors.email = 'Please enter your email address';
    }
    if(!password){
        errors.password = 'Please enter a password';
    }

    return errors;
}

SignIn = reduxForm({
    form: 'sign-in',
    validate: validate
    // initialValues: {
    //     email: 'test@mail.com',
    //     password: 'password',
    //     confirmPassword: 'password'
    // }
})(SignIn);

export default connect(null, {signIn})(SignIn);