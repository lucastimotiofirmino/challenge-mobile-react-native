import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import { BACKGROUND_IMAGE } from '../../assets/images';

interface BackgroundProps {
  children: any;
  imagePath?: string;
}

export const Background: React.FC<BackgroundProps> = ({
  imagePath,
  children,
}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        source={imagePath ? imagePath : BACKGROUND_IMAGE}
        style={styles.image}>
        {children}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
});
