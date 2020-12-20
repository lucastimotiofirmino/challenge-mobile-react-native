import {createStore} from 'redux';

import {FavoriteState} from './ducks/favorites/types';

import rootReducer from './ducks/rootReducer';

export interface ApplicationState {
  repositories: FavoriteState;
}

const store = createStore(rootReducer);

export default store;
