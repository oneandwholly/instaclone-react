import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

// dev dependencies
import { composeWithDevTools } from 'redux-devtools-extension';

// modules
import router from './modules/router';

// etc
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './rootReducer';

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(reduxThunk),
    // other store enhancers if any
  ));

ReactDOM.render(
    <Provider store={store}>
        <router.components.Router />
    </Provider>, 
    document.getElementById('root')
);

registerServiceWorker();
