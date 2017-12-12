import PropTypes from 'prop-types';
import { Route } from 'react-router';
import { connect } from 'react-redux';
import { Linking } from 'react-native';
import React, { Component } from 'react';
import createHistory from 'history/createMemoryHistory';
import { ConnectedRouter } from 'react-router-redux';

import Home from './view/home';
import Loading from './view/loading';
import Warning from './view/warning';
import Permissions from './global/permissions';
import * as DataActions from './store/actions/global';
import Store from './store';

const history = createHistory();

/**
 * This is the rootView component, it is required by
 * App and it includes the app router, the router definition
 * will also be here
 */
class RootView extends Component {
    componentWillMount () {
        Linking.getInitialURL().then((url) => {
            if (url) {
                // Handle the deeplink
            }
        });
        Permissions.checkAll().then((permissions) => {
            Store.getStore().dispatch(DataActions.updatePermissions(permissions));
        });
    }
    render () {
        /* Here we will read from global state to determine if we are returning
         * the router component or error component, at the point, we will have
         * the store restored for us
         */
        switch (this.props.globalState) {
            case 'loading': {
                return <Loading />;
            }
            case 'warning': {
                return <Warning />;
            }
            default:
                return (
                    <ConnectedRouter history={history}>
                        <Route exact path="/" component={Home} />
                    </ConnectedRouter>
                );
        }
    }
}

RootView.propTypes = {
    globalState: PropTypes.string
};

function select (store) {
    return {
        globalState: store.global.state
    };
}

export default connect(select)(RootView);
