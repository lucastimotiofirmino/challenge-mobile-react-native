import React from 'react';
import { Text } from 'react-native';

const StyledText = ({ style, children }) => (
  <Text style={style}>{children}</Text>
);

export default StyledText;
