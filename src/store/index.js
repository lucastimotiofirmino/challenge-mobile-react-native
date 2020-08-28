import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducers'
import Reactotron from "../../ReactotronConfig"
import { compose } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

function configureStore() {
    const persistedReducer = persistReducer(persistConfig, reducers)

    const store = createStore(
        persistedReducer,
        compose(applyMiddleware(thunk), Reactotron.createEnhancer())
    )
    
    const persistor = persistStore(store)
    
    return { store, persistor }
}

export default configureStore
