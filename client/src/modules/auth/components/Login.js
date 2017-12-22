import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import * as actions from '../actions';

class Login extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <button>Log In</button>
                Don't have an account? <a onClick={this.props.toggleLogin}>Sign up</a>
            </div>
        );
    }
}

// styled components
const StyledLogin = styled(Login)`
`;

export default connect(null, actions)(StyledLogin);