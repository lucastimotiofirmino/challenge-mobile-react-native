import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HeroesList from '../screens/HeroesList';
import Favorites from '../screens/Favorites';

const App = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <App.Navigator
        initialRouteName={'HeroList'}
        screenOptions={{
        headerBackTitleVisible: false,
        cardStyle: {backgroundColor: '#fff'},
      }}>
      <App.Screen
        options={{headerShown: false}}
        name="HeroesList"
        component={HeroesList}
      />
      <App.Screen
        options={{headerShown: false}}
        name="Favorites"
        component={Favorites}
      />
    </App.Navigator>
  );
};

export default AppRoutes;
