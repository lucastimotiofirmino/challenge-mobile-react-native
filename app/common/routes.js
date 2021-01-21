import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import HomePage from '../pages/HomePage';

const commonScreens = {
  HomePage: {
    component: HomePage,
  },
};

const SCREEN_OPTIONS = {
  headerTitleStyle: { alignSelf: 'center' },
  headerTintColor: '#000',
  headerBackTitleVisible: false,
};

const Routes = () => {
  return (
    <Stack.Navigator screenOptions={SCREEN_OPTIONS}>
      {Object.entries({
        ...commonScreens,
      }).map(([name, route]) => (
        <Stack.Screen
          key={name}
          name={name}
          component={route.component}
          options={route.options}
        />
      ))}
    </Stack.Navigator>
  );
};
export default Routes;
