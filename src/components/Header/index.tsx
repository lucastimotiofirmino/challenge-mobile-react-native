import React from 'react';
import { View } from 'react-native';

import backIcon from '../../assets/icons/back.png';

import * as Styles from './styles';

interface IHeader {
  title: string;
  onBack(): void;
}

const Header: React.FC<IHeader> = ({ title, onBack }: IHeader) => {
  return (
    <Styles.Container>
      <Styles.Content>
        <Styles.HeaderActionButton onPress={onBack}>
          <Styles.HeaderActionButtonIcon source={backIcon} />
        </Styles.HeaderActionButton>
        <Styles.Title>{title}</Styles.Title>
        <View />
      </Styles.Content>
    </Styles.Container>
  );
};

export default Header;
