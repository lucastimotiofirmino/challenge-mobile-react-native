import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const HomePage = () => {
  return (
    <View styles={styles.container}>
      <Text>Hello</Text>
    </View>
  );
};

export default HomePage;
