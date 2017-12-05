import { AppRegistry } from 'react-native';
import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

import App from './src/app';

Reactotron
    .configure({
        name: 'React Native One'
    })
    .use(reactotronRedux())
    .useReactNative()
    .connect();

AppRegistry.registerComponent('rnone', App);
