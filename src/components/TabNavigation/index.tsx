import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSelector} from 'react-redux';
import {Foundation as Icon} from '../../../loadFont';
import Characters from '../../components/Characters';
import Search from '../../components/Search';
import Favorites from '../Favorites';

const Tab = createBottomTabNavigator();

function TabNavigation() {
  const {favorites, theme} = useSelector<Redux.State, Redux.State>(
    (state) => state,
  );
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
          component={Search}
          options={{
            tabBarIcon: ({size, color}) => (
              <Icon name="magnifying-glass" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Favoritos"
          component={Favorites}
          options={{
            tabBarIcon: ({size, color}) => (
              <Icon name="heart" size={size} color={color} />
            ),
            tabBarBadge: favorites.length,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabNavigation;
