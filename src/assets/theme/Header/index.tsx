import React from 'react';
import {View, Image} from 'react-native';
import {style} from './styles';

export interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <View>
      <Image
        source={require('../../../assets/images/Marvel-Comics-Logo.png')}
        style={style.logo}
      />
    </View>
  );
};

export default Header;
