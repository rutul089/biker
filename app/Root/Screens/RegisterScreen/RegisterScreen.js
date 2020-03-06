import React, { Component } from 'react';
import { View, Text, Image, Keyboard } from 'react-native';
import styles from './RegisterStyle';
import MainHeader from 'app/Component/MainHeader';
import { left, splashlogo } from 'app/assets';
import { Block, EditText, CustomText } from 'app/Component';
import { Content, Container, Button } from 'native-base';
import { sizes } from 'app/Theme';
import { NavigationActions, StackActions } from 'react-navigation';


class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      phone: '',
      name: '',
      errors: [],
      loading: false,
    };
  }

  //-- function for handling register request
  handleRegister() {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'HomeScreen' })],
    });
    this.props.navigation.dispatch(resetAction);
  }

  render() {
    const { loading, errors } = this.state;
    const hasErrors = key => (errors.includes(key) ? styles.hasErrors : null);
    return (
      <Container style={{ backgroundColor: "#FFF" }}>
        <MainHeader
          leftIcon={left}
          bodyContent={'Sign up'}
          backAction={() => {
            this.props.navigation.goBack();
          }}
        />
        <Content>
          <CustomText black h2 center style={{ marginTop: 15 }}>
            Create account to continue.
          </CustomText>
          <View style={{ paddingRight: 25, paddingLeft: 25, marginTop: 15 }}>
            <EditText
              label="Full Name"
              error={hasErrors('name')}
              style={[styles.input, hasErrors('name')]}
              defaultValue={this.state.name}
              onChangeText={text => this.setState({ name: text })}
            />
            <EditText
              label="Email"
              error={hasErrors('email')}
              style={[styles.input, hasErrors('email')]}
              defaultValue={this.state.email}
              onChangeText={text => this.setState({ email: text })}
            />
            <EditText
              label="Phone Number"
              phone
              error={hasErrors('phone')}
              style={[styles.input, hasErrors('phone')]}
              defaultValue={this.state.phone}
              onChangeText={text => this.setState({ phone: text })}
            />
            <EditText
              secure
              label="Password"
              error={hasErrors('password')}
              style={[styles.input, { paddingRight: 35 }, hasErrors('password')]}
              defaultValue={this.state.password}
              onChangeText={text => this.setState({ password: text })}
            />
            <Button
              block
              style={{
                borderRadius: 6,
                backgroundColor: '#FF7554',
                marginTop: 15,
              }}
              onPress={() => this.handleRegister()}>
              <CustomText h2 center semibold white>
                Register
              </CustomText>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

export default RegisterScreen;
