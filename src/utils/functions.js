export const removeLike = (item, likedItems) =>
  likedItems.filter((likedItem) => item.id !== likedItem.id);
