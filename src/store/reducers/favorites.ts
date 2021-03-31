const initial_state = [];
interface IState {
  id?: number;
  name?: string;
  thumbnail?: {
    path: string;
    extension: string;
  };
}
const Favorites = (state: IState[] = initial_state, action: any) => {
  switch (action.type) {
    case "LOAD_FAVORITES":
      state = action.payload;
      break;
    case "ADD_FAVORITE":
      console.log(state);
      state = [...state, action.payload];
      break;
    case "REMOVE_FAVORITE":
      state = state.filter((s) => s.id !== action.payload);
      break;
    default:
      break;
  }
  return [...state];
};

export default Favorites;
