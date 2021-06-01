import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {style} from './styles';

export interface itemProps {
  name: string;
  description?: string;
}

export interface Props {
  imageUrl: string;
  item: itemProps;
  onSeletcCharacter: Function;
}

const Character: React.FC<Props> = ({item, imageUrl, onSeletcCharacter}) => {
  return (
    <TouchableOpacity
      style={style.container}
      activeOpacity={0.7}
      onPress={() => {
        const data = {
          name: item.name,
          description: item.description,
        };
        onSeletcCharacter(data);
      }}>
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
