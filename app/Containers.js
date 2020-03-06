import React, {Component} from 'react';
import {Container} from 'native-base';
import Navigation from './Navigation';
import {StatusBar} from 'react-native';

class Containers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isConnected: true,
    };
  }

  render() {
    return (
      <Container>
        <StatusBar hidden={false} backgroundColor="#00BCD4" />
        <Navigation />
      </Container>
    );
  }
}

export default Containers;
