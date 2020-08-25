import React from 'react';
import { View } from 'react-native';

import backIcon from '../../assets/icons/back.png';
import filterIcon from '../../assets/icons/filter.png';
import favoriteIcon from '../../assets/icons/favorite.png';

import * as Styles from './styles';

interface IHeader {
  title: string;
  onBack(): void;
  onFilter(): void;
  onFavorite(): void;
}

const Header: React.FC<IHeader> = ({
  title,
  onBack,
  onFilter,
  onFavorite,
}: IHeader) => {
  return (
    <Styles.Container>
      <Styles.Content>
        <Styles.HeaderActionButton onPress={onBack}>
          <Styles.HeaderActionButtonIcon source={backIcon} />
        </Styles.HeaderActionButton>
        <Styles.ViewTitle>
          <Styles.Title>{title}</Styles.Title>
        </Styles.ViewTitle>
        <Styles.HeaderActionButton marignRight onPress={onFavorite}>
          <Styles.HeaderActionButtonIcon source={favoriteIcon} />
        </Styles.HeaderActionButton>
        <Styles.HeaderActionButton onPress={onFilter}>
          <Styles.HeaderActionButtonIcon source={filterIcon} />
        </Styles.HeaderActionButton>
        <View />
      </Styles.Content>
    </Styles.Container>
  );
};

export default Header;
