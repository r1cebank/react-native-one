/*
 * This file include all the necessary procedures we need to do when we create
 * our state object for the app, a bug in this file will result in massive
 * inconsistencies across the entire app.
 */
/* global __DEV__ */

import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { AsyncStorage } from 'react-native';
import devTools from 'remote-redux-devtools';
import { persistCombineReducers, persistStore } from 'redux-persist';
import { createStore, applyMiddleware, compose } from 'redux';

import settingsReducer from './reducers/settings';
import initialstate from '../res/initial-state.json';

const loggerMiddleware = createLogger();

const createStoreWithMiddleware = __DEV__ ? applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
    // Reactotron.reduxMiddleware
)(createStore) : applyMiddleware(
    thunkMiddleware
)(createStore);

const rootReducer = persistCombineReducers({ key: 'primary', storage: AsyncStorage }, {
    // every modules reducer should be define here
    settings: settingsReducer
});

function configureStore () {
    let enhancers = undefined;
    if (__DEV__) {
        enhancers = compose(devTools());
    } else {
        enhancers = compose();
    }
    const applicationStore = createStoreWithMiddleware(rootReducer, initialstate, enhancers);
    const persistor = persistStore(applicationStore, null);
    return { store: applicationStore, persistor };
}

class store {
    constructor () {
        const configuredStore = configureStore();
        this.store = configuredStore.store;
        this.persistor = configuredStore.persistor;
    }
    static getStore () {
        if (!this.store) {
            const configuredStore = configureStore();
            this.store = configuredStore.store;
            this.persistor = configuredStore.persistor;
        }
        return this.store;
    }
    static getPersistor () {
        if (!this.store) {
            const configuredStore = configureStore();
            this.store = configuredStore.store;
            this.persistor = configuredStore.persistor;
        }
        return this.persistor;
    }
}

export default store;
