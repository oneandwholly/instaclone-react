import React, { Component } from 'react';

// React components
import Login from './Login';
import Signup from './Signup';

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.toggleLogin = this.toggleLogin.bind(this);
        this.state = { showLogin: false }
    }

    toggleLogin() {
        this.setState({ showLogin: !this.state.showLogin });
    }

    render() {
        if (this.state.showLogin) {
            return <Login toggleLogin={this.toggleLogin} />
        }
        return (
            <Signup toggleLogin={this.toggleLogin} />
        );
    }
}

export default LandingPage;