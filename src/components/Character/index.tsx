import React, {useState} from 'react';
import {
  Container,
  Title,
  Image,
  ContainerModal,
  ImageModal,
  TitleModal,
  DescriptionModal,
  TitleSection,
  ItemSection,
  Favorite,
  BackButton,
} from './styles';
import {Modal, SectionList} from 'react-native';
import {useDispatch} from 'react-redux';
import {
  addCharacterToFavorites,
  removeCharacterFromFavorites,
} from '../../store/favorites/actions';
import {MaterialIcons as Icon} from '../../../loadFont';

function Character({item}: Marvel.CharacterItem) {
  const {name, thumbnail, description, events, series, comics, stories} = item;
  const [visible, setVisible] = useState(false);
  const image = `${thumbnail?.path}.${thumbnail?.extension}`;
  const dispatch = useDispatch();
  const dataSections = [
    {
      title: 'Events',
      data: events?.items || [],
    },
    {
      title: 'Series',
      data: series?.items || [],
    },
    {
      title: 'Comics',
      data: comics?.items || [],
    },
    {
      title: 'Stories',
      data: stories?.items || [],
    },
  ];

  function addToFavorites() {
    dispatch(addCharacterToFavorites(item));
  }

  function removeFromFavorites() {
    dispatch(removeCharacterFromFavorites(item));
  }

  return (
    <>
      <Modal
        visible={visible}
        statusBarTranslucent={true}
        animationType="fade"
        onRequestClose={() => setVisible(false)}>
        <ContainerModal>
          <ImageModal source={{uri: image}} />
          <TitleModal>{name}</TitleModal>
          <BackButton>
            <Icon
              name="arrow-back-ios"
              size={40}
              color="red"
              onPress={() => console.log('voltar')}
            />
          </BackButton>
          <Favorite>
            <Icon
              name="favorite"
              size={40}
              color="red"
              onPress={removeFromFavorites}
            />
            <Icon
              name="favorite-border"
              size={40}
              color="red"
              onPress={addToFavorites}
            />
          </Favorite>
          {Boolean(description) && (
            <DescriptionModal>{description}</DescriptionModal>
          )}
          <SectionList
            sections={dataSections}
            keyExtractor={(section, index) => `${section.name}${index}`}
            renderItem={({item: section}) => (
              <ItemSection>{section.name}</ItemSection>
            )}
            renderSectionHeader={({section: {title}}) => (
              <TitleSection>{title}</TitleSection>
            )}
          />
        </ContainerModal>
      </Modal>
      <Container onPress={() => setVisible(true)}>
        <Image source={{uri: image}} />
        <Title>{name}</Title>
      </Container>
    </>
  );
}

export default Character;
