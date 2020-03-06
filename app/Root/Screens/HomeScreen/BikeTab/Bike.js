import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './BikeStyle';
export default class Bike extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text> Bike </Text>
      </View>
    );
  }
}
