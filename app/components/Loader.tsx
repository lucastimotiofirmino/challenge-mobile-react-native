import React, { useEffect, FunctionComponent } from 'react';

import { StyleSheet, Animated, Easing, ImageStyle } from 'react-native';
import icon from '../../assets/captain-icon.png';

const LOADER_SIZE: number = 42;

type Style = {
  loader: ImageStyle;
};

const styles = StyleSheet.create<Style>({
  loader: {
    width: LOADER_SIZE,
    height: LOADER_SIZE,
    alignSelf: 'center',
    marginVertical: 10,
  },
});

type LoaderProps = {
  style?: ImageStyle;
};

const Loader: FunctionComponent<LoaderProps> = ({ style }) => {
  const spinAnimationValue = new Animated.Value(0);

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinAnimationValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.bezier(0.645, 0.045, 0.355, 1.0),
        useNativeDriver: true,
        isInteraction: false,
      }),
    ).start();
  }, []);

  const spinAnimationRotate = spinAnimationValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Animated.Image
      source={icon}
      style={{
        transform: [{ rotate: spinAnimationRotate }],
        ...styles.loader,
        ...style,
      }}
    />
  );
};

export default Loader;
