import React from 'react';
import { TouchableOpacity } from 'react-native';

const Button = ({ style, children, onPress }) => (
  <TouchableOpacity style={style} onPress={onPress}>
    {children}
  </TouchableOpacity>
);

export default Button;
