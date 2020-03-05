import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Container from './Containers';
import Navigation from "./Navigation";
import { Root } from "native-base";


const App = () => (
  <Root>
    <Container >
      <Navigation />
    </Container>
  </Root>
);
export default App;

