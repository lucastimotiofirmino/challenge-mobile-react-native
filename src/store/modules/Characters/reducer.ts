/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-param-reassign */
import { produce } from 'immer';
import { CharacterTypes } from './types';
import ICharacterStateReducer from './state';

const INITIAL_STATE: ICharacterStateReducer = {
  data: [
    {
      id: '',
      name: '',
      description: '',
      favorite: false,
      thumbnail: {
        path: '',
        extension: '',
      },
    },
  ],
  loading: false,
  refresh: false,
};

export default function character(
  state = INITIAL_STATE,
  action: any,
): ICharacterStateReducer {
  return produce(state, draft => {
    switch (action.type) {
      case CharacterTypes.GET_CHARACTER_LIST_REQUEST: {
        draft.loading = true;
        draft.refresh = true;
        break;
      }

      case CharacterTypes.GET_CHARACTER_LIST_SUCCESS: {
        draft.data = action.payload.data;
        draft.loading = false;
        draft.refresh = false;
        break;
      }

      case CharacterTypes.GET_CHARS_PAGINATION_REQUEST: {
        break;
      }

      case CharacterTypes.GET_CHARS_PAGINATION_SUCCESS: {
        draft.data = [...draft.data, ...action.payload.data];
        break;
      }

      default:
        break;
    }
  });
}
