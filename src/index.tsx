import React from 'react';
import { StyleSheet, View } from 'react-native';
import Heroes from './screens/Heroes/Heroes';

import { Provider } from 'react-redux'
import store from './store'

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Heroes />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
