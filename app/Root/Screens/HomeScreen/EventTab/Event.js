import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './EventStyle';

export default class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text> Event </Text>
      </View>
    );
  }
}
