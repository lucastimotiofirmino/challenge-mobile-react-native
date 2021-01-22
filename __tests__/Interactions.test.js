/* eslint-disable no-undef */
import React from 'react';
import { fireEvent, waitFor } from '@testing-library/react-native';
import { useNavigation } from '@react-navigation/native';
import { renderWithRedux, makeTestStore } from '../app/utils/render-test';
import HomePage from '../app/pages/HomePage';
import HeroModal from '../app/pages/HeroModal';

import { axiosInstance } from '../app/common/request';
import MockAdapter from 'axios-mock-adapter';
const mockApi = new MockAdapter(axiosInstance);

const Wolverine = {
  id: 1,
  name: 'Wolverine',
  thumbnail: {
    path: 'test',
    extension: 'jpg',
  },
  description: 'Test description',
  events: { avaliable: 1 },
};

const Abyss = {
  id: 2,
  name: 'Abyss',
  thumbnail: {
    path: 'test',
    extension: 'jpg',
  },
  events: { avaliable: 1 },
};

describe('HomePage interaction suite', () => {
  const realStore = makeTestStore();
  const mockNavigate = jest.fn();
  const mocksetOptions = jest.fn();

  beforeEach(() => {
    useNavigation.mockImplementation(() => ({
      navigate: mockNavigate,
      setOptions: mocksetOptions,
    }));
  });

  test('renders the heroes homepage initial', async () => {
    mockApi.onGet(/characters*/).replyOnce(200, {
      data: {
        total: 0,
        count: 0,
        results: [Wolverine, Abyss],
      },
    });
    const { getByText } = renderWithRedux(<HomePage />, {
      store: realStore,
    });

    await waitFor(() => expect(getByText(/Wolverine/i)).toBeTruthy());
    await waitFor(() => expect(getByText(/Abyss/i)).toBeTruthy());
  });

  test('user can search heroes', async () => {
    mockApi.onGet(/characters*/).replyOnce(200, {
      data: {
        total: 0,
        count: 0,
        results: [Wolverine],
      },
    });

    const { getByText, getByPlaceholderText } = renderWithRedux(<HomePage />, {
      store: realStore,
    });

    mockApi.onGet(/nameStartsWith*/).replyOnce(200, {
      data: {
        total: 0,
        count: 0,
        results: [Abyss],
      },
    });

    const input = getByPlaceholderText(/Filtre um herói/i);
    await fireEvent.changeText(input, 'aby');
    await fireEvent(input, 'onSubmitEditing');

    await waitFor(() => expect(getByText(/Abyss/i)).toBeTruthy());
  });

  test('user can change the alfabetic order', async () => {
    mockApi.onGet(/characters*/).replyOnce(200, {
      data: {
        total: 0,
        count: 0,
        results: [Wolverine],
      },
    });

    const { queryAllByTestId, getByText } = renderWithRedux(<HomePage />, {
      store: realStore,
    });

    const cards = queryAllByTestId(/fieldbutton/);
    const secondFieldAlpabetic = cards[1];

    mockApi.onGet(/orderBy\=\-name*/).replyOnce(200, {
      data: {
        total: 0,
        count: 0,
        results: [Abyss],
      },
    });

    await fireEvent.press(secondFieldAlpabetic);

    await waitFor(() => expect(getByText(/Abyss/i)).toBeTruthy());
  });

  test('user can open hero modal', async () => {
    mockApi.onGet(/characters*/).replyOnce(200, {
      data: {
        total: 0,
        count: 0,
        results: [Wolverine],
      },
    });

    const { queryAllByTestId, getByText } = renderWithRedux(<HomePage />, {
      store: realStore,
    });

    await waitFor(() => expect(getByText(/Wolverine/i)).toBeTruthy());

    const cards = queryAllByTestId(/cardHero/);

    const firstCard = cards[0];

    await fireEvent.press(firstCard);

    await waitFor(() => expect(mockNavigate).toHaveBeenCalledTimes(1));
    expect(mockNavigate).toHaveBeenCalledWith('HeroModal', {
      ...Wolverine,
      avatar: 'test.jpg',
      favorite: false,
      numEvents: 'undefined',
    });
  });

  test('user see hero modal', async () => {
    const { getByText, toJSON } = renderWithRedux(
      <HeroModal route={{ params: Wolverine }} />,
      { store: realStore },
    );

    await waitFor(() => expect(getByText(/Wolverine/i)).toBeTruthy());
    await waitFor(() => expect(getByText(/Test description/i)).toBeTruthy());

    expect(toJSON()).toMatchSnapshot();
  });
});
