import * as helpers from '../app/common/helpers';

describe('helpers tests suite', () => {
  const heroes = [{ name: 'Wolverine' }];
  test('filter results with existing query item', () => {
    const results = helpers.filterWithQuerySearch(heroes, 'wolve');

    expect(results).toBeTruthy();
    expect(results).toEqual(heroes);
  });
  test('filter results with non existing query item', () => {
    const results = helpers.filterWithQuerySearch(heroes, 'iduahsdauisdhjk');

    expect(results).toBeTruthy();
    expect(results).toEqual([]);
  });
});
