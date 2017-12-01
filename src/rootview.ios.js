import { Route } from 'react-router';
import React, { Component } from 'react';
import createHistory from 'history/createMemoryHistory';
import { ConnectedRouter } from 'react-router-redux';

import Home from './view/home';

const history = createHistory();

export default class RootView extends Component {
    render () {
        return (
            <ConnectedRouter history={history}>
                <Route exact path="/" component={Home} />
            </ConnectedRouter>
        );
    }
}
