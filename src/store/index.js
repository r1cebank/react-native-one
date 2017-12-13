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
import Reactotron from 'reactotron-react-native';
import { persistCombineReducers, persistStore } from 'redux-persist';
import { createStore, applyMiddleware, compose } from 'redux';

import settingsReducer from './reducers/settings';
import globalReduer from './reducers/global';
import initialstate from '../res/initial-state.json';

/**
 * Configure store function, this is invoked by the singleton
 * @returns {any}
 */
function configureStore () {
    const loggerMiddleware = createLogger();

    /**
     * Create a new createstore function with middlewares
     * also we want to eliminate some of the middlewares
     * for on-device deployment
     */
    const createStoreWithMiddleware = __DEV__ ? applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
        // Reactotron.reduxMiddleware
    )(Reactotron.createStore) : applyMiddleware(
        thunkMiddleware
    )(createStore);

    /**
     * Create the root reduer by combinging the reducers together,
     * here is where we add our custom reducers
     */
    const rootReducer = persistCombineReducers({ key: 'root', storage: AsyncStorage }, {
        // every modules reducer should be define here
        global: globalReduer,
        settings: settingsReducer
    });
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

/**
 * This is the singleton for the application store
 * when a store is requested it will check existing store
 * if non exist, it will invoke the createstore to create a new store
 */
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
    static dispatch (action) {
        store.getStore().dispatch(action);
    }
}

export default store;
