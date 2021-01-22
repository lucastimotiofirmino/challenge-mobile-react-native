import 'react-native';
import React from 'react';
import { render, cleanup } from '@testing-library/react-native';
import Loader from '../app/components/Loader';
import Field from '../app/components/Field';
import HeroCard from '../app/components/HeroCard';
import { renderWithRedux, makeTestStore } from '../app/utils/render-test';

describe('suite simple components renders', () => {
  afterEach(cleanup);

  test('renders correctly the custom loader component', () => {
    const loader = render(<Loader />).toJSON();

    expect(loader.type).toBe('Image');
    expect(loader).toMatchSnapshot();
  });

  test('renders correctly the hero card component', () => {
    const hero = {
      id: 1,
      name: 'Wolverine',
      avatar: 'test',
    };
    const { getByText, toJSON } = renderWithRedux(<HeroCard {...hero} />, {store: makeTestStore()});

    expect(getByText(/Wolverine/i)).toBeTruthy();

    expect(toJSON()).toMatchSnapshot();
  });

  test('renders correctly the field component', () => {
    const field = {
      icon: 'down',
      text: 'TestContentField',
    };
    const { getByText, toJSON } = render(<Field {...field} />);

    expect(getByText(/TestContentField/i)).toBeTruthy();

    expect(toJSON()).toMatchSnapshot();
  });
});
