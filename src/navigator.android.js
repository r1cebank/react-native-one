import { StackNavigator } from 'react-navigation';

import Home from './view/home';
import Intro from './view/intro';

const RootNavigator = StackNavigator({
    Home: {
        screen: Home,
        path: 'home'
    },
    Intro: {
        screen: Intro,
        path: 'intro'
    }
});

export default RootNavigator;
