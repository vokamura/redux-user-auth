import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class SignUp extends Component {
    renderInputs(props){
        const error = props.meta.touched && props.meta.error;
        return(
            <div className={`form-group ${props.className}`}>
                <label>{props.label}</label>
                <input {...props.input} type="text" className={`form-control ${error ? 'is-invalid' : ''}`} autoComplete="off"/>
                <div className="invali  d-feedback"> 
                    {error}
                </div>
            </div>
        )
    }

    handleSignUp(values){
        console.log('Form Values: ', values);
    }

    render(){
        const { handleSubmit } = this.props;
        return(
            <form onSubmit={handleSubmit(this.handleSignUp)}>
                <h1 className="text-center">Create Account</h1>
                <div className="row">
                    <Field className="col-6 offset-3" name="email" component={this.renderInputs} label="Email"/>
                </div>
                <div className="row">
                    <Field className="col-6 offset-3" name="password" component={this.renderInputs} label="Password"/>
                </div>
                <div className="row">
                    <Field className="col-6 offset-3" name="confirmPassword" component={this.renderInputs} label="Confirm Password"/>
                </div>
                <div>
                    <div className="d-flex col-6 offset-3 justify-content-end">
                        <button className="btn btn-outline-success">Sign Up</button>
                    </div> 
                </div>
            </form>
        )
    }
}

//values come from Redux form
function validate(values) {
    //these names come directly from name on Field
    const { email, password, confirmPassword } = values;
    const errors = {};
    
    if(!email) {
        errors.email = 'Please enter your email';
    }

    if (!password) {
        errors.password = 'Please choose a password';
    }

    // if (!confirmPassword) {
    //     errors.confirmPassword = 'Please confirm your password';
    // }

    if (password !== confirmPassword) {
        errors.confirmPassword = 'Passwords do not match';
    }

    return errors;
}

//reassigning what SignUp is
//reduxForm returns new version of our component
//returns config object that gives it a name
//can set default values in initialValues
SignUp = reduxForm({
    form: 'sign-up',
    //redux form checks to see if there's a validate function
    validate: validate
    // initialValues: {
    //     email: 'test@mail.com',
    //     password: 'password123',
    //     confirmPassword: 'password123'
    // }
})(SignUp);

export default SignUp;