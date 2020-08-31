import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Spacing, Colors, Typography } from '../../styles';

interface HeroNameProps {
  children: any;
}

export const HeroName: React.FC<HeroNameProps> = ({ children }) => {
  return (
    <Text numberOfLines={2} ellipsizeMode="tail" style={styles.heroName}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  heroName: {
    flex: 1,
    height: Spacing.SCALE_50,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    fontSize: Typography.FONT_SIZE_18,
    letterSpacing: -1,
    color: Colors.WHITE,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    textAlignVertical: 'center',
    textTransform: 'uppercase',
    padding: Spacing.SCALE_10,
    marginRight: Spacing.SCALE_10,
  },
});
