import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// other components
import ViewPort from './ViewPort' 
import IndexRoute from './IndexRoute';


class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <ViewPort>
                    <Route path='/' exact component={IndexRoute} />
                </ViewPort>
            </BrowserRouter>
        );
    }
}

export default Router;