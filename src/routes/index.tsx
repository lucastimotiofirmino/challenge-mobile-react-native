import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MarvelScreen from '../screens/Home';
import CharactersScreen from '../screens/Character';

const Stack = createStackNavigator();

const MarvelRoutes: React.FC = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="marvel" component={MarvelScreen} />
      <Stack.Screen name="characters" component={CharactersScreen} />
    </Stack.Navigator>
  );
};

export default MarvelRoutes;
