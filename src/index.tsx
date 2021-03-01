import 'react-native-gesture-handler'
import React from 'react'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import store from './store'

import CharactersScreen from './views/CharactersScreen'

import './config/Reactotron'

const Stack = createStackNavigator();

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Characters"
          component={CharactersScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
)

export default App
