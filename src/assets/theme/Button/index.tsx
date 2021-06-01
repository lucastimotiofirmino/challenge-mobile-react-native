import React from 'react';
import {PressableProps, Pressable, Text} from 'react-native';
import {style} from './style';

export interface Props extends PressableProps {
  title: string;
}

const Button: React.FC<Props> = props => {
  const {title} = props;
  return (
    <Pressable
      {...props}
      style={({pressed}) => [
        {
          backgroundColor: pressed ? 'blue' : 'red',
        },
        style.button,
      ]}>
      <Text style={style.text}>{title}</Text>
    </Pressable>
  );
};

export default Button;
