import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import Store from './store';
import Loading from './view/loading';
import Warning from './view/warning';
import Navigator from './navigator';
import Permissions from './global/permissions';
import * as DataActions from './store/actions/global';

/**
 * This is the rootView component, it is required by
 * App and it includes the app router, the router definition
 * will also be here
 */
class RootView extends Component {
    componentWillMount () {
        // Update permissions during app startup
        Permissions.checkAll().then((permissions) => {
            Store.dispatch(DataActions.updatePermissions(permissions));
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
                return <Navigator uriPrefix="rnone://" />;
        }
    }
}

RootView.propTypes = {
    globalState: PropTypes.string,
    firstLaunch: PropTypes.bool
};

function select (store) {
    return {
        globalState: store.global.state
    };
}

export default connect(select)(RootView);
