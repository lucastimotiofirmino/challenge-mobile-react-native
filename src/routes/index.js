import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Main from '~/views/Main';

import { MAIN } from '~/constants/routes';

const Stack = createStackNavigator();

const Application = () => (
  <NavigationContainer>
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={MAIN} component={Main} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Application;
