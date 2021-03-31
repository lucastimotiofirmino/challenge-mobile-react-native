import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import { AntDesign} from '@expo/vector-icons'

import List from '../pages/List';
import FavouriteList from '../pages/FavoriteList';
import Details from '../pages/Details';
// import Home from '../pages/Home';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const StackScreen: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={List}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FavouriteList"
        component={FavouriteList}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const AppRoutes: React.FC = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        showLabel: false,
        style: {
          backgroundColor: '#222222',
          borderTopColor: '#5e5e5e',
        },
        inactiveTintColor: '#f1f2f3',
        activeTintColor: '#E62429',
      }}>
      <Tab.Screen
        name="List"
        component={StackScreen}
        options={{
          tabBarIcon: ({color, size}) => {
            return <AntDesign name="home" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="FavouriteList"
        component={FavouriteList}
        options={{
          tabBarIcon: ({color, size}) => {
            return <AntDesign name="hearto" color={color} size={size} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default AppRoutes;
