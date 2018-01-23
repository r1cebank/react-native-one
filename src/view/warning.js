/**
 * Warning view, using lottie animation
 */
import React, { Component } from 'react';

import LottieView from 'lottie-react-native';

export default class Warning extends Component {
    componentDidMount () {
        this.animation.play();
    }
    render () {
        return (
            <LottieView
                ref={animation => {
                    this.animation = animation;
                }}
                loop={false}
                source={require('../animations/lottie/warning-sign.json')} />
        );
    }
}
