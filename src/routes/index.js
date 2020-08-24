import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Details, Home, Search} from "../pages";
import {colors} from "../theme";

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerTransparent: true,
                        title: null,
                    }}
                />
                <Stack.Screen
                    name="Details"
                    component={Details}
                    options={{
                        headerTransparent: true,
                        title: null,
                        headerBackTitleVisible: false,
                        headerTintColor: colors.white
                    }}
                />
                <Stack.Screen
                    name="Search"
                    component={Search}
                    options={{
                        headerTransparent: true,
                        title: null,
                        headerBackTitleVisible: false,
                        headerTintColor: colors.white
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
