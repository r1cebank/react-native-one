/**
 * Loading view, using lottie animation
 */
import React, { Component } from 'react';

import LottieView from 'lottie-react-native';

export default class Loading extends Component {
    componentDidMount () {
        this.animation.play();
    }
    render () {
        return (
            <LottieView
                ref={animation => {
                    this.animation = animation;
                }}
                source={require('../animations/lottie/ice-cream-animation.json')}
          />
        );
    }
}
