import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Spacing, Colors, Typography } from '../../styles';
import { ICON_IMAGE } from '../../assets/images';

interface BrandIconProps {
  style?: object;
}

export const BrandIcon: React.FC<BrandIconProps> = ({ style }) => {
  return (
    <View style={styles.container}>
      <Image
        style={[styles.brand, style ? style : null]}
        resizeMode="contain"
        source={ICON_IMAGE}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: Spacing.SCALE_40,
  },
  brand: {
    height: Spacing.SCALE_40,
  },
});
