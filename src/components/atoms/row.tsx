import React from 'react';
import { View, StyleSheet } from 'react-native';

interface RowProps {
  children: any;
  style?: object;
}

export const Row: React.FC<RowProps> = ({ children, style }) => {
  return <View style={[styles.row, { ...style }]}>{children}</View>;
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
});
