import { removeLike } from '~/utils/functions';

import { Types as CharacterTypes } from './characters';
import { Types as EventTypes } from './events';
import { Types as SerieTypes } from './series';

const INITIAL_STATE = {
  likedCharacters: [],
  likedEvents: [],
  likedSeries: [],
};

export default function reducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;

  const { likedCharacters, likedEvents, likedSeries } = state;

  switch (type) {
    case CharacterTypes.LIKE_A_CHARACTER:
      return {
        ...state,
        likedCharacters: [...likedCharacters, payload.character],
      };
    case CharacterTypes.UNLIKE_A_CHARACTER:
      return {
        ...state,
        likedCharacters: removeLike(payload.character, likedCharacters),
      };
    case EventTypes.LIKE_A_EVENT:
      return {
        ...state,
        likedEvents: [...likedEvents, payload.event],
      };
    case EventTypes.UNLIKE_A_EVENT:
      return {
        ...state,
        likedEvents: removeLike(payload.event, likedEvents),
      };
    case SerieTypes.LIKE_A_SERIE:
      return {
        ...state,
        likedSeries: [...likedSeries, payload.serie],
      };
    case SerieTypes.UNLIKE_A_SERIE:
      return {
        ...state,
        likedSeries: removeLike(payload.serie, likedSeries),
      };
    default:
      return state;
  }
}
