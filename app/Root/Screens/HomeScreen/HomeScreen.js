import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './HomeScreenStyle';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text> HomeScreen </Text>
      </View>
    );
  }
}
