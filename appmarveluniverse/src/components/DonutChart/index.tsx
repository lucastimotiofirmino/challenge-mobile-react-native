/**
 * @description: Component Donut to be use as statistical Graph
 */

// Reacts import
import * as React from 'react';
import { Easing, TextInput, Animated, View, StyleSheet } from 'react-native';
import Svg, { G, Circle } from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

// Interfaces definition
interface IDonutParams {
  percentage: number;
  radius: number;
  strokeWidth: number;
  duration: number;
  color: string;
  textColor: string;
  max: number;
  startAnimation: boolean;
}

export default function Donut({
  percentage = 75,
  radius = 40,
  strokeWidth = 10,
  duration = 500,
  color = 'tomato',
  textColor,
  max = 100,
  startAnimation = false,
}: IDonutParams): SVGElement {
  const animated = React.useRef(new Animated.Value(0)).current;
  const circleRef = React.useRef();
  const inputRef = React.useRef();
  const circumference = 2 * Math.PI * radius;
  const halfCircle = radius + strokeWidth;

  const animation = (toValue: number): void => {
    return Animated.timing(animated, {
      delay: 100, // Delay to star the animation
      toValue,
      duration,
      useNativeDriver: true,
      easing: Easing.out(Easing.ease),
    }).start(() => {
      // animation(toValue === 0 ? percentage : 0);
    });
  };

  React.useEffect(() => {
    if (startAnimation) animation(percentage);
    animated.addListener(
      v => {
        const maxPerc = (100 * v.value) / max;
        const strokeDashoffset =
          circumference - (circumference * maxPerc) / 100;
        if (inputRef.current) {
          inputRef?.current?.setNativeProps({
            text: `${Math.round(v.value)}`,
          });
        }
        if (circleRef.current) {
          circleRef?.current?.setNativeProps({
            strokeDashoffset,
          });
        }
      },
      [max, percentage],
    );

    return () => {
      animated.removeAllListeners();
    };
  });

  const styles = StyleSheet.create({
    text: { fontWeight: '900', textAlign: 'center' },
  });

  return (
    <View style={{ width: radius * 2, height: radius * 2 }}>
      <Svg
        height={radius * 2}
        width={radius * 2}
        viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}
      >
        <G rotation="-90" origin={`${halfCircle}, ${halfCircle}`}>
          <Circle
            ref={circleRef}
            cx="50%"
            cy="50%"
            r={radius}
            fill="transparent"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDashoffset={circumference}
            strokeDasharray={circumference}
          />
          <AnimatedCircle
            cx="50%"
            cy="50%"
            r={radius}
            fill="transparent"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
            strokeOpacity=".1"
          />
        </G>
      </Svg>
      <AnimatedTextInput
        ref={inputRef}
        underlineColorAndroid="transparent"
        editable={false}
        defaultValue="0"
        style={[
          styles.text,
          StyleSheet.absoluteFillObject,
          { fontSize: radius / 2, color: textColor ?? color },
        ]}
      />
    </View>
  );
}
