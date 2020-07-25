import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from "react-redux";
import store from "./store";
import MainComponent from './components/MainComponent'

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={MainComponent}>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);
