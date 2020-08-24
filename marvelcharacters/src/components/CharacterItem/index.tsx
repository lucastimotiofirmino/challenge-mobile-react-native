import React from 'react';
import {TouchableOpacityProperties, TouchableOpacity} from 'react-native';
import filledStar from '../../assets/filledStar.png';
import solidStar from '../../assets/solidStar.png';
import {
  Component,
  Container,
  Content,
  Image,
  Footer,
  Name,
  FavoriteView,
  FavoriteImage,
} from './styles';

interface CharacterItemProps extends TouchableOpacityProperties {
  imagePath: string;
  name: string;
  isFavorite: boolean;
  favoriteOnPress(): void;
}

const CharacterItem: React.FC<CharacterItemProps> = ({
  imagePath,
  name,
  isFavorite,
  favoriteOnPress,
  ...rest
}) => {
  const favorite = isFavorite ? solidStar : filledStar;
  return (
    <Component>
      <Container {...rest}>
        <Content>
          <Image source={{uri: imagePath}} />
          <Footer>
            <Name>{name}</Name>
            <FavoriteView onPress={favoriteOnPress}>
              <FavoriteImage source={favorite} />
            </FavoriteView>
          </Footer>
        </Content>
      </Container>
    </Component>
  );
};

export default CharacterItem;
