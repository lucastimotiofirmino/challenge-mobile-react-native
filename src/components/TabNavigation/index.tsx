import React from 'react';
import {LightTheme as theme} from '../../themes';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Characters from '../../components/Characters';
import Icon from '../../../loadFont';

const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeBackgroundColor: theme.colors.characterBackground,
          activeTintColor: theme.colors.primary,
          inactiveTintColor: theme.colors.text,
          labelStyle: {
            fontSize: 10,
          },
          style: {
            height: 60,
            paddingTop: 10,
            paddingBottom: 10,
            backgroundColor: theme.colors.characterBackground,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={Characters}
          options={{
            tabBarIcon: ({size, color}) => (
              <Icon name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Pesquisar"
          component={Characters}
          options={{
            tabBarIcon: ({size, color}) => (
              <Icon name="magnifying-glass" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Favoritos"
          component={Characters}
          options={{
            tabBarIcon: ({size, color}) => (
              <Icon name="heart" size={size} color={color} />
            ),
            tabBarBadge: 3,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabNavigation;
