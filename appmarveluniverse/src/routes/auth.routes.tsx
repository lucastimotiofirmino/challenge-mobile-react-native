import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: true,
        headerTransparent: true,
        headerStyle: {
          backgroundColor: '#7159c1',
        },
        headerTitleAlign: 'left',
        headerTitleStyle: {
          fontFamily: 'Marvel-Regular',
          fontSize: 24,
        },
        cardStyle: { backgroundColor: '#000' },
      }}
    >
      <Auth.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerTitleAlign: 'center',
          headerTransparent: true,
          headerTitle: '',
          headerBackTitleStyle: { color: '#000' },
          headerBackTitle: '',
          headerBackTitleVisible: false,
          headerTintColor: '#000',
          headerTitleStyle: {
            fontFamily: 'Marvel-Bold',
            fontSize: 22,
          },
        }}
      />
      <Auth.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerTitleAlign: 'center',
          headerTransparent: true,
          headerTitle: '',
          headerBackTitleStyle: { color: '#000' },
          headerBackTitle: '',
          headerBackTitleVisible: false,
          headerTintColor: '#000',
          headerTitleStyle: {
            fontFamily: 'Marvel-Bold',
            fontSize: 22,
          },
        }}
      />
    </Auth.Navigator>
  );
};

export default AuthRoutes;
