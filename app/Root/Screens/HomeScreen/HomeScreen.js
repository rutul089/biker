import React, {Component} from 'react';
import {View, Image} from 'react-native';
import styles from './HomeScreenStyle';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import cs from '../../../CommonStyle';
//--icon
import {bike, profile, event, home, left, activity} from 'app/assets';
import {color} from 'app/Theme';

//-- Screen Name
import BikeTab from './BikeTab';
import EventTab from './EventTab';
import HomeTab from './CommunityTab';
import ProfileTab from './ProfileTab';
import ActivityTab from './ActivityTab';

const Tab = createBottomTabNavigator(
  {
    Bike: {
      screen: BikeTab,
      navigationOptions: () => ({
        tabBarIcon: ({tintColor, focused}) => (
          <Image
            tintColor={tintColor}
            style={styles.selectedIcon}
            source={focused ? bike : bike}
          />
        ),
      }),
    },
    Event: {
      screen: EventTab,
      navigationOptions: () => ({
        tabBarIcon: ({tintColor, focused}) => (
          <Image
            tintColor={tintColor}
            style={styles.selectedIcon}
            source={focused ? event : event}
          />
        ),
      }),
    },
    Activity: {
      screen: ActivityTab,
      navigationOptions: () => ({
        tabBarIcon: ({tintColor, focused}) => (
          <Image
            tintColor={tintColor}
            style={styles.selectedIcon}
            source={focused ? activity : activity}
          />
        ),
      }),
    },
    Home: {
      screen: HomeTab,
      navigationOptions: () => ({
        tabBarIcon: ({tintColor, focused}) => (
          <Image
            tintColor={tintColor}
            style={styles.selectedIcon}
            source={focused ? home : home}
          />
        ),
      }),
    },
    Profile: {
      screen: ProfileTab,
      navigationOptions: () => ({
        tabBarIcon: ({tintColor, focused}) => (
          <Image
            tintColor={tintColor}
            style={styles.selectedIcon}
            source={focused ? profile : profile}
          />
        ),
      }),
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => {
      return {
        tabBarOptions: {
          tabBarVisible: true,
          activeTintColor: '#C12020',
          inactiveTintColor: 'gray',
          showLabel: false,
          style: {
            paddingTop: 10,
            paddingBottom: 5,
            height: 60,
          },
          swipeEnabled: true,
          animationEnabled: true,
        },
      };
    },
  },
);
const TabScreen = createStackNavigator({
  HomeScreen: {
    screen: Tab,
    lazy: false,
    navigationOptions: {
      header: null,
      tabBarOnPress: ({navigation, defaultHandler}) => {
        defaultHandler();
      },
    },
  },
});
// const MyNavigator = createSwitchNavigator({
//   routeNameOne: TabScreen,
// });
export default TabScreen;
