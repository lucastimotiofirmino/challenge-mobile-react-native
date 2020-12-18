import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';

import store from '../store';
import ThemeProvider from '../themes';

const Stack = createStackNavigator();

import HomeScreen from '../screens/Home';

const Router: React.FC = () => {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name={'Home'}
              component={HomeScreen}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </ThemeProvider>
  );
};

export default Router;
