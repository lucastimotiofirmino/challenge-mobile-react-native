import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MarvelScreen from '../screens/Home';

const Stack = createStackNavigator();

const MarvelRoutes: React.FC = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="marvel" component={MarvelScreen} />
    </Stack.Navigator>
  );
};

export default MarvelRoutes;
