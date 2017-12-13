import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Linking } from 'react-native';
import React, { Component } from 'react';
import Home from './view/home';
import Intro from './view/intro';
import Loading from './view/loading';
import Warning from './view/warning';
import Permissions from './global/permissions';
import * as DataActions from './store/actions/global';
import Store from './store';

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
        // Update permissions during app startup
        Permissions.checkAll().then((permissions) => {
            Store.dispatch(DataActions.updatePermissions(permissions));
        });
        if (this.props.firstLaunch) {
        }
    }
    render () {
        /* Here we will read from global state to determine if we are returning
         * the router component or error component, at the point, we will have
         * the store restored for us
         */
        return (
            <Intro />
        );
        // switch (this.props.globalState) {
        //     case 'loading': {
        //         return <Loading />;
        //     }
        //     case 'warning': {
        //         return <Warning />;
        //     }
        //     default:
        //         return (
        //             <ConnectedRouter history={history}>
        //                 <Route exact path="/" component={Home} />
        //                 <Route exact path="/intro" component={Intro} />
        //             </ConnectedRouter>
        //         );
        // }
    }
}

RootView.propTypes = {
    globalState: PropTypes.string,
    firstLaunch: PropTypes.bool
};

function select (store) {
    return {
        globalState: store.global.state,
        firstLaunch: store.global.firstLaunch
    };
}

export default connect(select)(RootView);
