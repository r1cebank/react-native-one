/**
 * Home view
 */

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

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
                <Text>
                Welcome to React Native!
                </Text>
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
