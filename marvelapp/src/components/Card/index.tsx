import React from 'react';
import {
  Container,
  Content,
  ImageAvatar,
  TextNamePerson,
  ContentText,
} from './styles';

interface CardProps {
  imageUrl: string;
  namePerson: string;
  onPress: () => void;
}

const Card = ({ imageUrl, namePerson, onPress }: CardProps): JSX.Element => {
  return (
    <Container
      onPress={onPress}
      activeOpacity={0.9}
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 10,
      }}
    >
      <Content>
        <ImageAvatar source={{ uri: imageUrl }} />
        <ContentText>
          <TextNamePerson>Personagem: {namePerson}</TextNamePerson>
        </ContentText>
      </Content>
    </Container>
  );
};

export default Card;
