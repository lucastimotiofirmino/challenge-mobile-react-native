import React from 'react';
import {View, Image, TouchableOpacity, TextInput} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {useColors} from '../../themes';
import {useSizes, useWindowSizes} from '../../constants/sizes';
import {styles} from './style';

import {SEARCH_BAR} from '../../constants/strings';

// @ts-ignore
import logo from '../../assets/logo.png';

export enum HeaderTypes {
  search,
  home,
}

interface HeaderProps {
  type: HeaderTypes;
  onPressSearch?: Function;
  onPressBack?: Function;
  onEndInput?: Function;
  getInputText?: Function;
}

const Header: React.FC<HeaderProps> = (Props) => {
  const {type, onPressSearch, onPressBack, getInputText, onEndInput} = Props;
  const colors = useColors();
  const sizes = useSizes();
  const windowSizes = useWindowSizes();
  const style = styles(colors, windowSizes);

  function renderHeaderHome(): JSX.Element {
    return (
      <View style={style.container}>
        <View style={style.headerHomeContainer}>
          <Image source={logo} resizeMode={'center'} />
        </View>
        <TouchableOpacity
          onPress={() => (onPressSearch ? onPressSearch() : null)}
          style={style.searchIconContainer}>
          <Icon
            name={'magnify'}
            size={sizes.iconSizeMedium}
            color={colors.LABEL_1_COLOR}
          />
        </TouchableOpacity>
      </View>
    );
  }

  function renderHeaderSearchHome(): JSX.Element {
    return (
      <View style={style.container}>
        <View style={style.headerSearchContainer}>
          <TouchableOpacity
            onPress={() => (onPressBack ? onPressBack() : null)}
            style={style.backIconContainer}>
            <Icon
              name={'chevron-left'}
              size={sizes.iconSizeBig}
              color={colors.LABEL_1_COLOR}
            />
          </TouchableOpacity>
          <View style={style.searchBarContainer}>
            <TextInput
              onEndEditing={() => (onEndInput ? onEndInput() : null)}
              style={style.textInputContainer}
              placeholder={SEARCH_BAR.inputPlaceholder}
              onChangeText={(text) =>
                getInputText ? getInputText(text) : null
              }
            />
          </View>
        </View>
      </View>
    );
  }

  return type === HeaderTypes.home
    ? renderHeaderHome()
    : renderHeaderSearchHome();
};

export default Header;
