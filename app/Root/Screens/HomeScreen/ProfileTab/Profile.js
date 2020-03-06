import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './ProfileStyle';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text> Profile </Text>
      </View>
    );
  }
}
