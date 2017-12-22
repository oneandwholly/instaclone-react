import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'; 
import { Field, reduxForm } from 'redux-form';

import * as actions from '../actions';

const renderField = ({ input, label, type, meta: { touched, error } }) =>
    <div>
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && ((error && <span style={{ color:'#ff5e5e' }}>{error}</span>))}
      </div>
    </div>

class Signup extends Component {
    render() {
        const { handleSubmit } = this.props;
        
        return (
            <div className={this.props.className}>
                <form onSubmit={handleSubmit((data) => { this.props.signup(data) })}>
                    <Field name="username" type="text" component={renderField} label="Username" />
                    <Field name="email" type="email" component={renderField} label="Email" />
                    <Field name="password" type="password" component={renderField} label="Password" />
                    <Field name="passwordConfirm" type="password" component={renderField} label="Confirm Password" />
                    <button>Sign Up</button>
                    Have an account? <a onClick={this.props.toggleLogin}>Log in</a>
                </form>
            </div>
        );
    }
}

// styled components
const StyledSignup = styled(Signup)`
`;

export default connect(null, actions)(reduxForm({ form: 'signup' })(StyledSignup));