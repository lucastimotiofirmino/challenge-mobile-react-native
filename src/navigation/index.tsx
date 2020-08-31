import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { TransitionPresets } from 'react-navigation-stack';
import { I18n } from '@aws-amplify/core';
import Home, { homeNavigationOptions } from '../scenes/Home';
import Detail, { detailNavigationOptions } from '../scenes/Detail';
import Favorites, { favoritesNavigationOptions } from '../scenes/Favorites';
import More, { moreNavigationOptions } from '../scenes/More';
import { CustomIcon } from '../components/atoms';
import { Spacing, Colors, Typography } from '../styles';

const HomeStack = createSharedElementStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: homeNavigationOptions,
    },
    Detail: {
      screen: Detail,
      navigationOptions: detailNavigationOptions,
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      gestureEnabled: true,
      cardOverlayEnabled: true,
      headerTransparent: true,
      headerTitle: '',
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      ...TransitionPresets.FadeFromBottomAndroid,
    },
  },
);

const FavoriteStack = createSharedElementStackNavigator(
  {
    Favorite: {
      screen: Favorites,
      navigationOptions: favoritesNavigationOptions,
    },
    Detail: {
      screen: Detail,
      navigationOptions: detailNavigationOptions,
    },
  },
  {
    initialRouteName: 'Favorite',
    defaultNavigationOptions: {
      gestureEnabled: true,
      cardOverlayEnabled: true,
      headerTransparent: true,
      headerTitle: '',
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      ...TransitionPresets.FadeFromBottomAndroid,
    },
  },
);

const MoreStack = createSharedElementStackNavigator(
  {
    More: {
      screen: More,
      navigationOptions: favoritesNavigationOptions,
    },
  },
  {
    initialRouteName: 'More',
    defaultNavigationOptions: {
      gestureEnabled: true,
      cardOverlayEnabled: true,
      headerTransparent: true,
      headerTitle: '',
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      ...TransitionPresets.FadeFromBottomAndroid,
    },
  },
);

const MainTabs = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarLabel: I18n.get('Home'),
        tabBarIcon: ({ focused, tintColor }) => {
          return <CustomIcon name="home-variant" />;
        },
      },
    },
    Favorites: {
      screen: FavoriteStack,
      navigationOptions: {
        tabBarLabel: I18n.get('Favorites'),
        tabBarIcon: ({ focused, tintColor }) => {
          return <CustomIcon name="heart-outline" />;
        },
      },
    },
    More: {
      screen: MoreStack,
      navigationOptions: {
        tabBarLabel: I18n.get('More'),
        tabBarIcon: ({ focused, tintColor }) => {
          return <CustomIcon name="dots-horizontal" />;
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.WHITE,
      inactiveTintColor: Colors.GRAY_DARK,
      labelStyle: { fontSize: Typography.FONT_SIZE_12 },
      style: {
        backgroundColor: Colors.BLACK,
        borderTopWidth: 0,
        //paddingTop: 20,
      },
    },
  },
);

//const AppContainer = createAppContainer(HomeStack);
const AppContainer = createAppContainer(MainTabs);
export default AppContainer;
