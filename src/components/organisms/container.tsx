import React from 'react';
import { View, SafeAreaView, StyleSheet, Platform } from 'react-native';
import { Spacing } from '../../styles';

interface ContainerProps {
  children: any;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  //SafeAreaView produz uma quebra na transição fluida.
  return <View style={styles.container}>{children}</View>;
  //return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Spacing.SCALE_10,
    paddingTop: Platform.OS === 'ios' ? 40 : 0,
  },
});
