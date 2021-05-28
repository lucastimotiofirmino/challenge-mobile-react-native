/**
 * @description: Routes of the app
 */

// Reacts import
import React from 'react';

// Dependencies import
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IonIcons from 'react-native-vector-icons/Ionicons';

// Pages import
import Splashscreen from '../pages/Splashscreen';
import DashBoard from '../pages/Dashboard';
import Favorite from '../pages/Favorite';

const Tab = createBottomTabNavigator();
const ModuleStack = createStackNavigator();

/** Tabbottom of App */
const AppTabStack: React.FC = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: '#ed1d24',
      inactiveTintColor: '#999',
      keyboardHidesTabBar: false,
      allowFontScaling: true,
    }}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Personagens') {
          iconName = focused ? 'md-earth' : 'md-earth';
        } else if (route.name === 'Favoritos') {
          iconName = focused ? 'heart-circle-sharp' : 'heart-circle-sharp';
        }

        // You can return any component that you like here!
        return <IonIcons name={iconName} size={size} color={color} />;
      },
    })}
  >
    <Tab.Screen name="Personagens" component={DashboardStack} />
    <Tab.Screen name="Favoritos" component={FavoriteStack} />
  </Tab.Navigator>
);

const SplashscreenStack: React.FC = () => {
  return (
    <ModuleStack.Navigator
      initialRouteName="Splashscreen"
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
      <ModuleStack.Screen
        name="Splashscreen"
        component={Splashscreen}
        options={{
          headerShown: false,
        }}
      />
      <ModuleStack.Screen
        name="AppStack"
        component={AppTabStack}
        options={{
          headerShown: false,
        }}
      />
    </ModuleStack.Navigator>
  );
};

const DashboardStack: React.FC = () => {
  return (
    <ModuleStack.Navigator
      initialRouteName="Dashboard"
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
      <ModuleStack.Screen
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
    </ModuleStack.Navigator>
  );
};

const FavoriteStack: React.FC = () => {
  return (
    <ModuleStack.Navigator
      initialRouteName="Favorite"
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
      <ModuleStack.Screen
        name="Favorite"
        component={Favorite}
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
    </ModuleStack.Navigator>
  );
};

export default SplashscreenStack;
