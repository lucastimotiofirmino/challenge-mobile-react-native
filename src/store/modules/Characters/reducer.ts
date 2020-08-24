/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-param-reassign */
import { produce } from 'immer';
import { CharacterTypes } from './types';
import ICharacterStateReducer from './state';

const INITIAL_STATE: ICharacterStateReducer = {
  data: {
    id: '',
    nome: '',
  },
  loading: false,
};

export default function perfil(
  state = INITIAL_STATE,
  action: any,
): ICharacterStateReducer {
  return produce(state, draft => {
    switch (action.type) {
      case CharacterTypes.GET_CHARACTER_REQUEST: {
        draft.loading = true;
        break;
      }

      case CharacterTypes.GET_CHARACTER_SUCCESS: {
        draft.loading = false;
        draft.data = action.payload.data;
        break;
      }

      default:
        break;
    }
  });
}
