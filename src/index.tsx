import 'react-native-gesture-handler'
import React from 'react'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import store from './store'

import CharactersScreen from './views/CharactersScreen'
import CharacterDetailsScreen from './views/CharacterDetailsScreen'

import './config/Reactotron'

const Stack = createStackNavigator()

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Characters"
          component={CharactersScreen}
          options={{
            headerTitle: 'MARVEL',
            headerStyle: { backgroundColor: '#f30' },
            headerTitleStyle: { color: '#fff', fontWeight: 'bold' }
          }}
        />
        <Stack.Screen
          name="CharacterDetails"
          component={CharacterDetailsScreen}
          options={{
            headerTitle: 'MARVEL - Character Details',
            headerStyle: { backgroundColor: '#f30' },
            headerTitleStyle: { color: '#fff', fontWeight: 'bold' }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
)

export default App
