// @ts-ignore
export const FavoriteSchema = {
  name: 'favorite',
  properties: {
    id: {type: 'int', indexed: true},
    name: 'string',
    description: 'string',
    thumbnail: 'string',
  },
};
