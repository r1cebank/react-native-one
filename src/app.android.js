/**
 * React Native One
 * https://github.com/r1cebank/react-native-one
 */
import { Provider } from 'react-redux';
import React, { Component } from 'react';

import Store from './store';
import RootView from './rootview';

export default function root () {
    class App extends Component {
        render () {
            return (
                <Provider store={Store.getStore()}>
                    <RootView />
                </Provider>
            );
        }
    }
    return App;
}
