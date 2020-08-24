import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  headerStyle,
  headerTitleStyle,
  headerTitleAlign,
  headerBackTitleStyle,
  cardStyle,
} from './styles';

import {FavoritesProvider} from '../hooks/favorites';

import Main from '../pages/Main';

const AppNav = createStackNavigator();

const AppRoutes: React.FC = () => (
  <FavoritesProvider>
    <NavigationContainer>
      <AppNav.Navigator
        screenOptions={{
          headerStyle,
          headerTitleStyle,
          headerTitleAlign,
          headerBackTitleStyle,
          cardStyle,
        }}
        initialRouteName="Main">
        <AppNav.Screen
          options={{
            title: '',
          }}
          name="Main"
          component={Main}
        />
      </AppNav.Navigator>
    </NavigationContainer>
  </FavoritesProvider>
);

export default AppRoutes;
