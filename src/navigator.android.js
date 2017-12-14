import { StackNavigator } from 'react-navigation';

import Home from './view/home';
import Intro from './view/intro';

const RootNavigator = StackNavigator({
    Home: {
        screen: Home
    },
    Intro: {
        screen: Intro
    }
});

export default RootNavigator;
