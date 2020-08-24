import React from 'react';
import filledStar from '../../assets/filledStar.png';
import solidStar from '../../assets/solidStar.png';
import Button from '../Button';

import {
  Container,
  Content,
  TitleView,
  Name,
  Description,
  FavoriteImage,
  ButtonView,
} from './styles';
import {Character} from '../../interfaces';

interface Props {
  close(): void;
  item: Character | null;
  isFavorite: boolean;
}

const ModalDetails: React.FC<Props> = ({close, item, isFavorite}) => {
  const favorite = isFavorite ? solidStar : filledStar;
  const imagePath = item
    ? `${item.thumbnail.path}.${item.thumbnail.extension}`
    : '';
  const description = item
    ? item.description
      ? item.description
      : null
    : null;
  return (
    <Container source={{uri: imagePath}}>
      <Content>
        <TitleView>
          <Name>{item ? item.name : ''}</Name>
          <FavoriteImage source={favorite} />
        </TitleView>
        {description ? <Description>{description}</Description> : <></>}
      </Content>
      <ButtonView>
        <Button onPress={close}>Voltar</Button>
      </ButtonView>
    </Container>
  );
};

export default ModalDetails;
