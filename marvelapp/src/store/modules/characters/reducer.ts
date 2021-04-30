import { Reducer } from 'redux';
import { ICharactersTypeState, ActionTypes } from './types';

const INITIAL_STATE: ICharactersTypeState = {
  itemsCharacters: [],
  infoResult: {
    offset: 0,
    limit: 0,
    total: 0,
    count: 0,
  },
  characterDetail: {} as any,
  openModalDetail: false,
  loadingCharacters: true,
  favoriteCharacters: [],
};

const CharactersReducer: Reducer<ICharactersTypeState> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case ActionTypes.getTypeCharactersRequest:
      return {
        ...state,
        loadingCharacters: true,
      };
    case ActionTypes.getTypeCharactersSuccess:
      return {
        ...state,
        loadingCharacters: false,
        itemsCharacters: action.payload,
      };
    case ActionTypes.getTypeCharactersInfoSuccess: {
      return {
        ...state,
        infoResult: action.payload,
      };
    }
    case ActionTypes.getTypeCharactersFailure:
      return {
        ...state,
        loadingCharacters: false,
        itemsCharacters: [],
      };

    case ActionTypes.getTypeCharacterSearchRequest: {
      return {
        ...state,
        loadingCharacters: true,
      };
    }

    case ActionTypes.getTypeCharacterSearchSuccess: {
      return {
        ...state,
        loadingCharacters: false,
        itemsCharacters: action.payload,
      };
    }

    case ActionTypes.getTypeCharacterSearchFailure: {
      return {
        ...state,
        loadingCharacters: false,
        itemsCharacters: [],
      };
    }

    case ActionTypes.getTypeOpenModalDetailCharacter: {
      return {
        ...state,
        openModalDetail: action.payload,
      };
    }

    case ActionTypes.getTypeDetailCharacterRequest: {
      return {
        ...state,
        loadingCharacters: true,
      };
    }

    case ActionTypes.getTypeDetailCharacterSuccess: {
      return {
        ...state,
        loadingCharacters: false,
        characterDetail: action.payload,
      };
    }
    case ActionTypes.getTypeDetailCharacterFailure: {
      return {
        ...state,
        loadingCharacters: false,
        characterDetail: {},
      };
    }

    case ActionTypes.getTypeFavoriteCharacter: {
      return {
        ...state,
      };
    }

    case ActionTypes.getTypeFavoriteCharacterSuccess: {
      return {
        ...state,
        favoriteCharacters: action.payload,
      };
    }

    default:
      return state;
  }
};

export default CharactersReducer;
