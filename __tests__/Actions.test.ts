/* eslint-disable no-undef */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actionsHero from '../app/actions/heroes';
import * as actionsFavorite from '../app/actions/favorite';
import { axiosInstance } from '../app/common/request';
import heroes from '../app/reducers/heroes';

import MockAdapter from 'axios-mock-adapter';
import { ADD_HERO_FAVORITE, FETCH_BATCH_HEROES, FETCH_HEROES_TOTAL, HeroActionTypes, HeroState, REMOVE_HERO_FAVORITE, RESET_HEROES } from '../app/types/heroes';

const mockApi = new MockAdapter(axiosInstance);
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const Wolverine = {
  id: "1",
  name: 'Wolverine',
  avatar: 'test.jpg',
  thumbnail: {
    path: 'test',
    extension: 'jpg',
  },
  events: { available: 1 },
  numEvents: 1,
};

const CaptainMarvel = {
  id: "2",
  name: 'Captain Marvel',
  avatar: 'test.jpg',
  thumbnail: {
    path: 'test',
    extension: 'jpg',
  },
  events: { available: 1 },
  numEvents: 1,
};

describe('hero actions and reducers suite', () => {
  const initialState = {
    favorites: [],
    heroes: [],
    total: 0,
    hasNext: true,
  };

  beforeEach(() => {
    mockApi.reset();
  });

  test('initial hero reducer is valid', () => {
    // @ts-ignore
    expect(heroes(undefined, { })).toEqual(initialState);
  });

  test('reset action is valid and successful', async () => {
    const store = mockStore(initialState);

    await store.dispatch(actionsHero.resetHeroes());

    const actions = store.getActions();
    expect(actions).toHaveLength(1);
    expect(actions[0]).toEqual({ type: RESET_HEROES });
    expect(store.getState()).toHaveProperty('total', 0);
  });

  test('fetch hereos', async () => {
    const url = new RegExp(`characters*`);
    mockApi.onGet(url).replyOnce(200, {
      data: {
        total: 0,
        count: 0,
        results: [Wolverine, CaptainMarvel],
      },
    });

    const store = mockStore(initialState);

    await store.dispatch(actionsHero.getHeroes({ limit: 10, offset: 0 }));

    const actualActions = store.getActions();
    expect(actualActions).toHaveLength(3);
    expect(actualActions[0].type).toEqual(RESET_HEROES);
    expect(actualActions[1].type).toEqual(FETCH_HEROES_TOTAL);
    expect(actualActions[2].type).toEqual(FETCH_BATCH_HEROES);

    const storeUpdated = actualActions.reduce(
      (prev: HeroState, current: HeroActionTypes) => heroes(prev, current),
      initialState,
    );

    expect(storeUpdated.heroes).toHaveLength(2);
    expect(storeUpdated.heroes[0].name).toEqual(Wolverine.name);
    expect(storeUpdated.heroes[1].name).toEqual(CaptainMarvel.name);
  });
});

describe('favorite actions and reducers suite', () => {
  beforeEach(() => {
    mockApi.reset();
  });

  test('add favorite action is valid and successful', async () => {
    const initialState = {
      favorites: [],
      heroes: [Wolverine, CaptainMarvel],
      total: 0,
      hasNext: true,
    };  
    const store = mockStore(initialState);

    await store.dispatch(actionsFavorite.addHeroFavorite(CaptainMarvel));

    const actualActions = store.getActions();
    expect(actualActions).toHaveLength(1);
    expect(actualActions[0].type).toEqual(ADD_HERO_FAVORITE);

    const storeUpdated = actualActions.reduce(
      (prev: HeroState, current: HeroActionTypes) => heroes(prev, current),
      initialState,
    );

    expect(storeUpdated.favorites).toHaveLength(1);
    expect(storeUpdated.favorites[0]).toEqual({...CaptainMarvel, favorite: true});
    expect(
      storeUpdated.heroes.find((hero: { id: string }) => hero.id === CaptainMarvel.id),
    ).toHaveProperty('favorite', true);
  });

  test('remove favorite action is valid and successful', async () => {
    const initialState = {
      favorites: [{...CaptainMarvel, favorite: true}],
      heroes: [Wolverine, {...CaptainMarvel, favorite: true}],
      total: 0,
      hasNext: true,
    };
    const store = mockStore(initialState);

    await store.dispatch(actionsFavorite.removeHeroFavorite(CaptainMarvel));

    const actualActions = store.getActions();
    expect(actualActions).toHaveLength(1);
    expect(actualActions[0].type).toEqual(REMOVE_HERO_FAVORITE);

    const storeUpdated = actualActions.reduce(
      (prev: HeroState, current: HeroActionTypes) => heroes(prev, current),
      initialState,
    );

    expect(storeUpdated.favorites).toHaveLength(0);
    expect(
      storeUpdated.heroes.find((hero: { id: string; }) => hero.id === CaptainMarvel.id),
    ).toHaveProperty('favorite', false);
  });
});
