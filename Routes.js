import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconAnt from 'react-native-vector-icons/AntDesign';

import Header from './src/components/Header'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import HeroesScreen from './src/screens/HeroesScreen';

const TabNavigation = createMaterialBottomTabNavigator({
    Home: {
        screen: HeroesScreen,
        navigationOptions: {
            labeled: false,
            tabBarIcon: ({ tintColor }) => <IconMaterial name={'people'} size={24} color={tintColor} />
        }
    },
    Favorites: {
        screen: HeroesScreen,
        navigationOptions: {
            labeled: false,
            tabBarIcon: ({ tintColor }) => <IconAnt name={'heart'} size={24} color={tintColor}/>
        }
    },
});

const MainNavigation = createStackNavigator({
    TabNavigation: {
        screen: TabNavigation,
        navigationOptions: {
            labeled: false,
            headerTitle: <Header/>,
            headerStyle: {
                elevation: 0,
                shadowOpacity: 0,
                shadowOffset: {
                    height: 0
                },
                shadowRadius: 0
            },
            headerTitleContainerStyle: {
                left: 18,
                right: 18
            },
        }
    }
})

export default createAppContainer(MainNavigation)