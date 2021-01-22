import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';
import HomePage from '../pages/HomePage';
import HeroModal from '../pages/HeroModal';

import logoIcon from '../../assets/logo-icon.png';

const Stack = createStackNavigator();

const MODAL_OPTIONS = {
  headerShown: false,
  cardStyle: { backgroundColor: 'rgba(0,0,0,0.5)' },
  cardStyleInterpolator: ({ current: { progress } }) => ({
    cardStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 0.5, 0.9, 1],
        outputRange: [0, 0.25, 0.7, 1],
      }),
    },
    overlayStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.5],
        extrapolate: 'clamp',
      }),
    },
  }),
};

const LOGO_SIZE: number = 34;

const Logo = () => (
  <Image
    source={logoIcon}
    style={{ width: LOGO_SIZE, height: LOGO_SIZE, alignSelf: 'center' }}
  />
);

const MainStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomePage}
      options={{ headerTitle: () => <Logo /> }}
    />
  </Stack.Navigator>
);

const Routes = () => {
  return (
    <Stack.Navigator mode="modal" screenOptions={MODAL_OPTIONS}>
      <Stack.Screen name="Main" component={MainStack} />
      <Stack.Screen name="HeroModal" component={HeroModal} />
    </Stack.Navigator>
  );
};

export default Routes;
