/**
 * React Native One
 * https://github.com/r1cebank/react-native-one
 */
import { Provider } from 'react-redux';
import React, { Component } from 'react';
import { PersistGate } from 'redux-persist/es/integration/react';

import Store from './store';
import RootView from './rootview';

/**
 * The root function is where you do most of the sync startup functions
 * The PersistGate wrapped around RootView is responsible to delay application loading
 * until the storage is loaded
 */

export default function root () {
    class App extends Component {
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
    return App;
}
