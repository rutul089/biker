import React, { Component } from 'react';
import { View, Text, Image, Alert, Platform } from 'react-native';
import styles from './ProfileStyle';
import MainHeader from 'app/Component/MainHeader';
import { left, logout, avtar, profile } from 'app/assets';
import { Block, EditText, CustomText, Switch } from 'app/Component';
import { Content, Container, Button, Thumbnail, List, ListItem, Icon, Left, Right, Body } from 'native-base';
import { sizes } from 'app/Theme';
import { NavigationActions, StackActions } from "react-navigation";
export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: true,
    };
  }

  //-- Handle my profile click
  handleAccountDetail() {
    this.props.navigation.navigate('MyProfileScreen')
  }

  //-- Handle log out click
  handleLogutOut() {
    if (Platform.OS == 'android') {
      Alert.alert(
        'Alert',
        'Are you sure, you want to logout?',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'OK', onPress: () => {
              // AsyncStorage.clear();
              const resetAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'WelcomeScreen' })],
              });
              this.props.navigation.dispatch(resetAction);
              //this.props.navigation.navigate('LoginScreen')
            }
          },
        ],
        { cancelable: false },
      );
    } else {
      // AsyncStorage.clear();
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'WelcomeScreen' })],
      });
      this.props.navigation.dispatch(resetAction);
      this.props.navigation.navigate('WelcomeScreen')
    }
  }

  //-- Handle change passward 
  handleChangePwd() {
    this.props.navigation.navigate('ChangePasswordScreen')
  }
  render() {
    return (
      <Container>
        <MainHeader
          bodyContent={'Profile'}
        />
        <Content>
          <View style={{}}>
            <Block flex={false} row center space="between" style={styles.header}>
              <CustomText h1 bold>
                John kevin
              </CustomText>
              <Thumbnail
                small
                source={avtar}
              />
            </Block>
            <ListItem icon style={{
              borderTopWidth: 1,
              borderTopColor: '#D1D1D6'
            }}
              onPress={() => this.handleAccountDetail()}
            >
              <Left>
                <Image
                  source={profile}
                  style={styles.iconStyle}
                />
              </Left>
              <Body>
                <CustomText h2>Account Detail</CustomText>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <CustomText h2>Notification</CustomText>
              </Left>
              <Right>
                <Switch
                  value={this.state.notifications}
                  onValueChange={value => this.setState({ notifications: value })}
                />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <CustomText h2>Activities</CustomText>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem onPress={() => this.handleChangePwd()}>
              <Left>
                <CustomText h2>Change password</CustomText>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem onPress={() => this.handleLogutOut()}>
              <Left>
                <CustomText h2>Log Out</CustomText>
              </Left>
              <Right>
                <Image
                  source={logout}
                  style={styles.iconStyle}
                />
              </Right>
            </ListItem>
          </View>
        </Content>
      </Container>
    );
  }
}
