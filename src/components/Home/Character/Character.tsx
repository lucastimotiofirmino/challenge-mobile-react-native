import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {style} from './styles';

export interface itemProps {
  name: string;
}

export interface Props {
  imageUrl: string;
  item: itemProps;
}

const Character: React.FC<Props> = ({item, imageUrl}) => {
  return (
    <TouchableOpacity style={style.container} activeOpacity={0.7}>
      <Image source={{uri: imageUrl}} style={style.imageStyle} />
      <View style={style.textContainer}>
        <Text style={style.text} numberOfLines={1}>
          {item?.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Character;
