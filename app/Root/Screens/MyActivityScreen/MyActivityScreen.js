import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './MyActivityStyle';
import {left, avtar} from 'app/assets';
import MainHeader from 'app/Component/MainHeader';
import {Block, EditText, CustomText, Switch} from 'app/Component';
import {Container, Content} from 'native-base';
import ItemView from './ItemView';
export default class MyActivityScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container style={{backgroundColor: '#f2f2f2'}}>
        <MainHeader
          bodyContent={'Feed'}
          leftIcon={left}
          backAction={() => {
            this.props.navigation.goBack();
          }}
        />
        <Content>
          <ItemView />
          <ItemView />
        </Content>
      </Container>
    );
  }
}
