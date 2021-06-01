import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import {style} from './style';
import {appEnum} from '../../../utils/enum';

export interface Props {
  onChangeFilterType: Function;
  filterType: String;
}

const Filter: React.FC<Props> = ({onChangeFilterType, filterType}) => {
  const {t} = useTranslation();
  const tKey = 'HOME.FILTERS';
  return (
    <View style={style.container}>
      <TouchableOpacity
        style={style.button}
        onPress={() => {
          onChangeFilterType(appEnum.FILTER_TYPE.TYPE_1);
        }}>
        <Text
          style={[
            style.buttonText,
            filterType === appEnum.FILTER_TYPE.TYPE_1
              ? style.buttonTextSelected
              : null,
          ]}>
          {t(`${tKey}.NAME`)}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.button}
        onPress={() => {
          onChangeFilterType(appEnum.FILTER_TYPE.TYPE_2);
        }}>
        <Text
          style={[
            style.buttonText,
            filterType === appEnum.FILTER_TYPE.TYPE_2
              ? style.buttonTextSelected
              : null,
          ]}>
          {t(`${tKey}.FAVORITE`)}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Filter;
