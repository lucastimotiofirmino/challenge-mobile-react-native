import * as helpers from '../app/common/helpers';
import { makeApiHash, appendHashToUrl } from '../app/common/request';

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

  test('request md5 hash of marvel API', () => {
    const hash = makeApiHash({
      timestamp: 1,
      privateKey: 'aaaa',
      publicKey: 'bbbb',
    }).toString();

    expect(hash).toEqual('b97dcaa04221f6f082f4db8222424332');
  });

  test('request append of marvel API', () => {
    const appendParams = appendHashToUrl({
      timestamp: 1,
      hash: 'b97dcaa04221f6f082f4db8222424332',
      publicKey: 'bbbb',
    }).toString();

    expect(appendParams).toEqual(
      '&ts=1&apikey=bbbb&hash=b97dcaa04221f6f082f4db8222424332',
    );
  });
});
