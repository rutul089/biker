import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { fromRight } from '././navigationTransitions';
import SplashScreen from './Root/Screens/SplashScreen';
import WelcomeScreen from './Root/Screens/WelcomeScreen';
import LoginScreen from './Root/Screens/LoginScreen';
import RegisterScreen from './Root/Screens/RegisterScreen';
import HomeScreen from './Root/Screens/HomeScreen';
import MyProfileScreen from './Root/Screens/MyProfileScreen';
import ChangePasswordScreen from './Root/Screens/ChangePassword';
import BikeDetailScreen from './Root/Screens/BikeDetailScreen';

console.disableYellowBox = true;

const StackScreen = createStackNavigator(
  {
    SplashScreen: {
      screen: SplashScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },
    WelcomeScreen: {
      screen: WelcomeScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },
    LoginScreen: {
      screen: LoginScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },
    RegisterScreen: {
      screen: RegisterScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },
    MyProfileScreen: {
      screen: MyProfileScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },
    ChangePasswordScreen: {
      screen: ChangePasswordScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },
    BikeDetailScreen: {
      screen: BikeDetailScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },
  },
  {
    /*
     * fromRight will animate screen from right side while open
     */
    transitionConfig: nav => fromRight(),
  },
);

export default createAppContainer(StackScreen);
