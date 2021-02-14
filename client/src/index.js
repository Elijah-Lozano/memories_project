import React from 'react';
import ReactDOM from 'react-dom';
// allows us to keep track of global state accessible from anywhere inside the app
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';

import reducers from './reducers';

import App from './App';

// use redux to create a store that makes state globally accessible to the whole app
const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(

    <Provider store={ store }>
        <App />
        </Provider>
        , document.getElementById('root'));