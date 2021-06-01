import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {style} from './style';
import {appEnum} from '../../../utils/enum';

export interface Props {
  onChangeFilterType: Function;
}

const Filter: React.FC<Props> = ({onChangeFilterType}) => {
  return (
    <View style={style.container}>
      <TouchableOpacity
        style={style.button}
        onPress={() => {
          onChangeFilterType(appEnum.FILTER_TYPE.TYPE_1);
        }}>
        <Text style={style.buttonText}>Nome</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.button}
        onPress={() => {
          onChangeFilterType(appEnum.FILTER_TYPE.TYPE_2);
        }}>
        <Text style={style.buttonText}>Favorito</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Filter;
