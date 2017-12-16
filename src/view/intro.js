import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Onboarding from 'react-native-onboarding-swiper';

class Intro extends Component {
    static navigationOptions = {
        header: null
    }
    constructor (props) {
        super(props);
        this.dismissView = this.dismissView.bind(this);
    }
    dismissView () {
        const { goBack } = this.props.navigation;
        goBack();
    }
    render () {
        return (
            <Onboarding
                onSkip={this.dismissView}
                onDone={this.dismissView}
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

Intro.propTypes = {
    navigation: PropTypes.object.isRequired
};

export default Intro;
