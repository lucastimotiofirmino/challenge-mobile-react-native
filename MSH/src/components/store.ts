import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducers from '../redux/reducer/ReducerFactory'
import Reactotron from '../../ReactotronConfig.js'
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
        compose(applyMiddleware(thunk))
    )
    
    const persistor = persistStore(store)
    
    return { store, persistor }
}

export default configureStore
