import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// modules
import auth from '../../auth'

// React components
const { LandingPage } = auth.components;

const IndexRoute = (props) => {
    if (props.auth.authenticated) {
        return <div>HomeFeed</div>
    }
    return (
        <LandingPage />
    );
}


export default connect(createStructuredSelector({
    auth: auth.selectors.getAll
}))(IndexRoute);