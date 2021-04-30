import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// import SignIn from '../pages/SignIn';
// import SignUp from '../pages/SignUp';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../pages/Home';

const App = createStackNavigator();

const AppRoutes = (): JSX.Element => (
  <NavigationContainer>
    <App.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <App.Screen name="Home" component={Home} />
    </App.Navigator>
  </NavigationContainer>
);

export default AppRoutes;
