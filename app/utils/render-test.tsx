import React from 'react';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import createStore from '../common/store';
import { Store } from 'redux';

export function renderWithRedux(
  ui: React.ReactNode,
  { store, ...otherOpts }: { store: Store },
) {
  return render(<Provider store={store}>{ui}</Provider>, otherOpts);
}

export function makeTestStore() {
  const { store } = createStore();
  return store;
}
