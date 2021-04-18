import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import Characters from '../page/characters'
import Favorites from '../page/favorites'
import Series from '../page/series'
import Events from '../page/events'
import SingleCharacter from '../page/single-character'
import SingleSerie from '../page/single-serie'
import SingleEvent from '../page/single-event'

const Tab = createMaterialTopTabNavigator()
const Stack = createStackNavigator()

function RouterStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: 'SuperMarvel',
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0
        }
      }}
    >
      <Stack.Screen
        name={"RouterTab"}
        component={RouterTab}
      />
      <Stack.Screen
        name={"SingleCharacter"}
        component={SingleCharacter}
        options={{
          headerShown: false,
          gestureEnabled: true,
          cardOverlayEnabled: true,
          ...TransitionPresets.ModalPresentationIOS,
        }}
      />
      <Stack.Screen
        name={"SingleSerie"}
        component={SingleSerie}
        options={{
          headerShown: false,
          gestureEnabled: true,
          cardOverlayEnabled: true,
          ...TransitionPresets.ModalPresentationIOS,
        }}
      />
      <Stack.Screen
        name={"SingleEvent"}
        component={SingleEvent}
        options={{
          headerShown: false,
          gestureEnabled: true,
          cardOverlayEnabled: true,
          ...TransitionPresets.ModalPresentationIOS,
        }}
      />
    </Stack.Navigator>
  )
}

function RouterTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={"Characters"}
        component={Characters}
        options={{title: 'Home'}}
      />
      <Tab.Screen
        name={"Series"}
        component={Series}
        options={{title: 'Séries'}}
      />
      <Tab.Screen
        name={"Events"}
        component={Events}
        options={{title: 'Eventos'}}
      />
      <Tab.Screen
        name={"Favorites"}
        component={Favorites}
        options={{title: 'Favoritos'}}
      />
    </Tab.Navigator>
  )
}

export default RouterStack