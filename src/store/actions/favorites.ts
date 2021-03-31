export const loadFavorites = (heroe: any[]) => {
  return { type: "LOAD_FAVORITES", payload: heroe };
};
export const addFav = (heroe: any) => {
  return { type: "ADD_FAVORITE", payload: heroe };
};
export const removeFav = (id: number) => {
  return { type: "REMOVE_FAVORITE", payload: id };
};
