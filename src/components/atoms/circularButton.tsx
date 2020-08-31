import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Spacing, Colors, Typography, Mixins } from '../../styles';

interface CircularButtonProps {
  onPress(): void;
}

export const CircularButton: React.FC<CircularButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Icon name="close" size={Typography.FONT_SIZE_40} color={Colors.WHITE} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: Spacing.SCALE_60,
    height: Spacing.SCALE_60,
    position: 'absolute',
    bottom: Spacing.SCALE_10,
    right: Spacing.SCALE_5,
    backgroundColor: Colors.PRIMARY,
    borderRadius: Spacing.SCALE_40,
    paddingLeft: Spacing.SCALE_12,
    paddingRight: Spacing.SCALE_12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
