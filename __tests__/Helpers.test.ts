import * as helpers from '../app/common/helpers';
import { IHero } from '../app/common/interfaces';
import { makeApiHash, appendHashToUrl } from '../app/common/request';

describe('helpers tests suite', () => {
  const heroes: IHero[] = [{ id: "1", name: 'Wolverine', avatar: 'test.jpg', numEvents: 0 }];
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
    const hash = makeApiHash(1, 'aaaa', 'bbbb').toString();

    expect(hash).toEqual('b97dcaa04221f6f082f4db8222424332');
  });

  test('request append of marvel API', () => {
    const appendParams = appendHashToUrl(
      1,
      'bbbb',
      'b97dcaa04221f6f082f4db8222424332',
    ).toString();

    expect(appendParams).toEqual(
      '&ts=1&apikey=bbbb&hash=b97dcaa04221f6f082f4db8222424332',
    );
  });
});
