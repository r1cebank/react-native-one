import React, { Component } from 'react';
import Onboarding from 'react-native-onboarding-swiper';

export default class Intro extends Component {
    static navigationOptions = {
        header: null
    }
    render () {
        return (
            <Onboarding
                pages={[
                    {
                        backgroundColor: '#fff',
                        title: 'Onboarding',
                        subtitle: 'Done with React Native Onboarding Swiper'
                    },
                    {
                        backgroundColor: '#fe6e58',
                        title: 'The Title',
                        subtitle: 'This is the subtitle that sumplements the title.'
                    },
                    {
                        backgroundColor: '#999',
                        title: 'Triangle',
                        subtitle: "Beautiful, isn't it?"
                    }
                ]}
            />
        );
    }
}
