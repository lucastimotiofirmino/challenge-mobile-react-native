import React from 'react';

import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Icon = ({ style, type = 'default', name, size, color }) => {
  let icon;

  const iconProps = {
    name,
    size,
    style,
    color,
  };

  switch (type) {
    case 'foundation':
      icon = <Foundation {...iconProps} />;
      break;
    case 'ionicons':
      icon = <Ionicons {...iconProps} />;
      break;
    case 'material':
      icon = <MaterialIcons {...iconProps} />;
      break;
    default:
      icon = <MaterialCommunity {...iconProps} />;
      break;
  }

  return icon;
};

export default Icon;
