import {Reducer} from 'redux';
import {Favorites, FavoriteState, FavoriteTypes} from './types';
import Realm from 'realm';
import {FavoriteSchema} from '../../../database/schemas/FavoriteSchema';
import {HERO_ITEM} from '../../../constants/strings';

const INITIAL_STATE: FavoriteState = {
  data: [],
};

function saveData(newData: Favorites) {
  const data = {
    id: newData.id,
    name: newData.name,
    thumbnail: newData.thumbnail.path + '.' + newData.thumbnail.extension,
    description:
      newData.description.length > 0
        ? newData.description
        : HERO_ITEM.description,
  };

  Realm.open({schema: [FavoriteSchema]})
    .then((realm) => {
      realm.write(() => {
        realm.create('favorite', data);
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

function removeData(newData: Favorites) {
  Realm.open({schema: [FavoriteSchema]})
    .then((realm) => {
      const favorites = realm
        .objects('favorite')
        .filtered('name =' + '"' + newData.name + '"');

      realm.write(() => {
        realm.delete(favorites);
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

// @ts-ignore
const reducer: Reducer<FavoriteState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FavoriteTypes.ADD_FAVORITES:
      saveData(action.payload.data);
      return state;
    case FavoriteTypes.REMOVE_FAVORITES:
      removeData(action.payload.data);
      return state;
    default:
      return state;
  }
};

export default reducer;
