import React from 'react'
import {Provider as StoreProvider} from 'react-redux'
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper'

import Routes from './Routes'
import {RED, DARK_RED} from './src/constants/colors'
import configureStore from './src/store'
import { PersistGate } from 'redux-persist/integration/react'

const { store, persistor } = configureStore()

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: DARK_RED,
        accent: 'red',
    },
}

const App = () => {
    return (
        <StoreProvider store={store}>
            <PersistGate persistor={persistor} loading={null}>
                <PaperProvider theme={theme}>
                    <Routes />
                </PaperProvider>
            </PersistGate>
        </StoreProvider>
    )
}

export default App
