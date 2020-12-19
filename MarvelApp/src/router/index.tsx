import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';

import store from '../store';
import ThemeProvider from '../themes';

import HomeScreen from '../screens/Home';
import SearchScreen from '../screens/Search';

export enum ROUTES {
  Home = 'Home',
  Search = 'Search',
}

const Stack = createStackNavigator();

const Router: React.FC = () => {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name={ROUTES.Home}
              component={HomeScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={ROUTES.Search}
              component={SearchScreen}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </ThemeProvider>
  );
};

export default Router;
