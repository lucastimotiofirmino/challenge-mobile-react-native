import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Spacing, Colors, Typography } from '../../styles';

interface HeroDescriptionProps {
  children: any;
}

export const HeroDescription: React.FC<HeroDescriptionProps> = ({
  children,
}) => {
  return <Text style={styles.description}>{children}</Text>;
};

const styles = StyleSheet.create({
  description: {
    flex: 1,
    width: '100%',
    fontFamily: Typography.FONT_FAMILY_BOLD,
    fontSize: Typography.FONT_SIZE_20,
    lineHeight: Spacing.SCALE_26,
    letterSpacing: 1,
    color: Colors.WHITE,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    textAlignVertical: 'center',
    padding: Spacing.SCALE_16,
    paddingTop: 0,
  },
});
