import React, { Component } from 'react';
import {
    View, Text, Animated,
    Dimensions,
    Image,
    FlatList,
    Modal,
    StyleSheet,
    ScrollView
} from 'react-native';
import styles from './WelcomeStyle';
import { Block } from '../../../Component';
import { color, sizes } from 'app/Theme';
const { width, height } = Dimensions.get("window");

class WelcomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Block center>
               
            </Block>
        );
    }
}

export default WelcomeScreen;
