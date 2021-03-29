export const removeLike = (id, likedIds) =>
  likedIds.filter((otherId) => id !== otherId);
