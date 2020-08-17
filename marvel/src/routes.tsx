import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Main from './screens/Main';
import Favorites from './screens/Favorites';

const Tab = createBottomTabNavigator();

const Routes = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string = '';

          if (route.name === 'Characters') {
            iconName = 'view-list';
          } else if (route.name === 'Favorites') {
            iconName = focused ? 'star' : 'star-outline';
          }

          if (route.name === 'Characters') {
            return <MCIcons name={iconName} size={size} color={color} />;
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#f78f3f',
        inactiveTintColor: '#aaa',
      }}
    >
      <Tab.Screen name="Characters" component={Main} />
      <Tab.Screen name="Favorites" component={Favorites} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default Routes;
