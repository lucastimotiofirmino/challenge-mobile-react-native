import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Main from '~/views/Main';

import { MAIN } from '~/constants/routes';

const Stack = createStackNavigator();

const Application = () => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name={MAIN} component={Main} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default Application;
