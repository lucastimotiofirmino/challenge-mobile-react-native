import React from 'react';
import {PressableProps, Pressable, Text} from 'react-native';
import {style} from './style';
import {colors} from '../colors';

export interface Props extends PressableProps {
  title: string;
  selected?: Boolean;
}

const Button: React.FC<Props> = props => {
  const {title, selected} = props;
  return (
    <Pressable
      {...props}
      style={({pressed}) => [
        selected
          ? {
              backgroundColor: pressed ? 'transparent' : colors.primary,
            }
          : {
              backgroundColor: pressed ? colors.primary : 'transparent',
            },
        style.button,
      ]}>
      <Text style={style.text}>{title}</Text>
    </Pressable>
  );
};

export default Button;
