import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import {fromRight} from '././navigationTransitions';
import SplashScreen from './Root/Screens/SplashScreen';
import WelcomeScreen from './Root/Screens/WelcomeScreen';

console.disableYellowBox = true;

const StackScreen = createStackNavigator(
  {
    SplashScreen: {
      screen: SplashScreen,
      navigationOptions: () => ({
        header: null,
      }),
    }, WelcomeScreen: {
      screen: WelcomeScreen,
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