import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './ActivityStyle';

export default class Activity extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text> Activity </Text>
      </View>
    );
  }
}
