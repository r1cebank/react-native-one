/**
 * React Native One
 * https://github.com/r1cebank/react-native-one
 */
import { Provider } from 'react-redux';
import { AppState } from 'react-native';
import React, { Component } from 'react';
import { PersistGate } from 'redux-persist/es/integration/react';
import DeviceInfo from './global/deviceInfo';

import Store from './store';
import RootView from './rootview';
import LifeCycle from './global/lifecycle';

/**
 * The root function is where you do most of the sync startup functions
 * The PersistGate wrapped around RootView is responsible to delay application loading
 * until the storage is loaded
 */
class App extends Component {
    /**
     * This is the app component, the first thing RN will look at when rendering
     * here we will attach some event listeners so we can attach appoporiate handlers
     */
    componentDidMount () {
        AppState.addEventListener('change', LifeCycle.appStateChanged);
    }

    componentWillUnmount () {
        AppState.removeEventListener('change', LifeCycle.appStateChanged);
    }
    render () {
        return (
            <Provider store={Store.getStore()}>
                <PersistGate persistor={Store.getPersistor()}>
                    <RootView />
                </PersistGate>
            </Provider>
        );
    }
}

export default function root () {
    /**
     * Before we return app and let RN render the app
     * we might want to do some setup work to initialize sdk,
     * initialize more sdk?
     */
    LifeCycle.beforeLaunch();
    return App;
}
