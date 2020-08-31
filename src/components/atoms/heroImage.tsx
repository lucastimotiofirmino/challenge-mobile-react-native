import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import { Spacing, Colors } from '../../styles';

interface HeroImageProps {
  source: string;
  uniqueId: string;
  height?: number;
}

export const HeroImage: React.FC<HeroImageProps> = ({
  source,
  uniqueId,
  height,
}) => {
  return (
    <View style={styles.container}>
      <SharedElement id={uniqueId}>
        <Image
          style={[
            styles.heroImage,
            { height: height ? height : Spacing.SCALE_160 },
          ]}
          resizeMode="cover"
          source={{
            uri:
              source ||
              'http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16.jpg',
          }}
        />
      </SharedElement>
      <View style={styles.bottomBar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: Colors.BLACK,
  },
  heroImage: {
    width: '100%',
    height: Spacing.SCALE_160,
  },
  bottomBar: {
    backgroundColor: Colors.PRIMARY,
    height: Spacing.SCALE_5,
  },
});
