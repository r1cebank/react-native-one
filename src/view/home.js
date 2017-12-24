/**
 * Home view
 */

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import {
    View
} from 'react-native';
import { RkButton } from 'react-native-ui-kitten';

class Home extends Component {
    componentWillMount () {
        const { navigate } = this.props.navigation;
        if (this.props.firstLaunch) {
            navigate('Intro');
        }
    }
    render () {
        return (
            <View>
                <RkButton>Click me!</RkButton>
            </View>
        );
    }
}

Home.propTypes = {
    navigation: PropTypes.object.isRequired,
    firstLaunch: PropTypes.bool
};

function select (store) {
    return {
        firstLaunch: store.global.firstLaunch
    };
}

export default connect(select)(Home);
