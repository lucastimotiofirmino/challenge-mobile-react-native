import React from 'react';
import {PressableProps, Pressable, Text} from 'react-native';

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
      ]}>
      <Text>{title}</Text>
    </Pressable>
  );
};

export default Button;
