import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DashBoard from '../pages/Dashboard';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: true,
        animationEnabled: true,
        headerTransparent: true,
        headerStyle: {
          backgroundColor: '#000',
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
        name="DashBoard"
        component={DashBoard}
        options={{
          headerTitleAlign: 'center',
          headerTransparent: true,
          headerTitle: '',
          headerBackTitleStyle: { color: '#fff' },
          headerBackTitle: '',
          headerBackTitleVisible: false,
          headerTintColor: '#fff',
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
