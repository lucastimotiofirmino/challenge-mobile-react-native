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
} from './styles';
import {Modal, SectionList} from 'react-native';

interface CharacterData {
  data: Marvel.Character;
}

function Character({data}: CharacterData) {
  const {name, thumbnail, description, events, series, comics, stories} = data;
  const [visible, setVisible] = useState(false);
  const image = `${thumbnail?.path}.${thumbnail?.extension}`;
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
          {Boolean(description) && (
            <DescriptionModal>{description}</DescriptionModal>
          )}
          <SectionList
            sections={dataSections}
            keyExtractor={(item, index) => `${item}${index}`}
            renderItem={({item}) => <ItemSection>{item.name}</ItemSection>}
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
