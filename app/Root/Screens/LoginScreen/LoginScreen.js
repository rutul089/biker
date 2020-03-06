import React, { Component } from 'react';
import { View, Text, Image, Keyboard } from 'react-native';
import styles from './LoginStyle';
import MainHeader from 'app/Component/MainHeader';
import { left, splashlogo } from 'app/assets';
import { Block, EditText, CustomText } from 'app/Component';
import { Content, Container, Button } from 'native-base';
import { sizes } from 'app/Theme';
import { color } from 'react-native-reanimated';
import { NavigationActions, StackActions } from 'react-navigation';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'admin@admin.com',
      password: 'admin',
      errors: [],
      loading: false,
    };
  }

  handleLogin() {
    const { email, password } = this.state;
    const errors = [];
    Keyboard.dismiss();

    // check with backend API or with some static data
    if (email !== 'admin@admin.com') {
      errors.push('email');
    }
    if (password !== 'admin') {
      errors.push('password');
    }

    this.setState({ errors });
    if (!errors.length) {
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'HomeScreen' })],
      });
      this.props.navigation.dispatch(resetAction);
    }
  }

  render() {
    const { navigation } = this.props;
    const { loading, errors } = this.state;
    const hasErrors = key => (errors.includes(key) ? styles.hasErrors : null);
    return (
      <Container style={{ backgroundColor: "#FFF" }}>
        <MainHeader
          leftIcon={left}
          bodyContent={'Login'}
          backAction={() => {
            this.props.navigation.goBack();
          }}
        />
        <Content>
          <View style={styles.container1}>
            <Image style={styles.imageStyle} source={splashlogo} />
            <CustomText h1 bold style={{ marginTop: 15 }}>
              Welcome Back
            </CustomText>
          </View>
          <View style={{ padding: 30, marginTop: 20 }}>
            <EditText
              label="Email"
              error={hasErrors('email')}
              style={[styles.input, hasErrors('email')]}
              defaultValue={this.state.email}
              onChangeText={text => this.setState({ email: text })}
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
                marginTop: 12,
              }}
              onPress={() => this.handleLogin()}>
              <CustomText h2 center semibold white>
                Login
              </CustomText>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

export default LoginScreen;
