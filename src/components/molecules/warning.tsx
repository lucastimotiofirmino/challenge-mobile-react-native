import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { I18n } from '@aws-amplify/core';
import { Spacing, Colors, Typography } from '../../styles';
import { STANLEE_IMAGE } from '../../assets/images';

interface WarningProps {
  title: string;
  description: string;
}

export const Warning: React.FC<WarningProps> = ({ title, description }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} resizeMode="center" source={STANLEE_IMAGE} />
      <Text style={styles.title}>{I18n.get(title)}</Text>
      <Text style={styles.description}>{I18n.get(description)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Spacing.SCALE_10,
  },
  image: {
    alignSelf: 'center',
    margin: Spacing.SCALE_20,
  },
  title: {
    fontFamily: Typography.FONT_FAMILY_BOLD,
    fontSize: Typography.FONT_SIZE_30,
    letterSpacing: -1,
    color: Colors.WHITE,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    textAlignVertical: 'center',
    textTransform: 'uppercase',
    margin: Spacing.SCALE_10,
  },
  description: {
    fontFamily: Typography.FONT_FAMILY_LIGHT,
    fontSize: Typography.FONT_SIZE_18,
    letterSpacing: -1,
    color: Colors.WHITE,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    textAlignVertical: 'center',
    textTransform: 'uppercase',
  },
});
