import React, { useEffect, useState, ReactElement } from 'react';
import { FlatList, View, Modal, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

import * as CharActions from '../../store/modules/Characters/actions';
import { RootState } from '../../store/modules/rootReducer';
import Header from '../../components/Header';
import Loading from '../../components/Loading';

import backIcon from '../../assets/icons/arrow-rigth.png';
import closeIcon from '../../assets/icons/close.png';

import * as Styles from './styles';

interface ICharacterBody {
  id: string;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

const Characters: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [page, setPage] = useState(1);
  const [character, setCharacter] = useState<ICharacterBody>({
    id: '',
    name: '',
    description: '',
    thumbnail: {
      path: '',
      extension: '',
    },
  });

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const characters = useSelector((state: RootState) => state.characters.data);
  const refresh = useSelector((state: RootState) => state.characters.refresh);
  const loading = useSelector((state: RootState) => state.characters.loading);

  useEffect(() => {
    dispatch(CharActions.getCharacterListRequest());
  }, []);

  const goBack = (): void => {
    navigation.goBack();
  };

  const modalController = (char: ICharacterBody): void => {
    setCharacter(char);
    setModalVisible(!modalVisible);
  };

  const CharacterModal = (): ReactElement => {
    return (
      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={() => {}}
      >
        <Styles.ModalContainer>
          <Styles.ModalContent showsVerticalScrollIndicator={false}>
            <Styles.ImageCover
              blurRadius={2}
              source={{
                uri: `${character.thumbnail.path}.${character.thumbnail.extension}`,
              }}
            >
              <LinearGradient
                colors={[
                  'rgba(0, 0, 0, 0.3)',
                  'rgba(0, 0, 0, 0.2)',
                  'transparent',
                ]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: 300,
                }}
              />
              <View
                style={{
                  width: 150,
                  height: 150,
                  borderRadius: 75,
                  elevation: 20,
                }}
              >
                <Image
                  style={{
                    width: 150,
                    height: 150,
                    borderRadius: 75,
                  }}
                  source={{
                    uri: `${character.thumbnail.path}.${character.thumbnail.extension}`,
                  }}
                />
              </View>
            </Styles.ImageCover>
            <Styles.ViewInfoModal>
              <Styles.ModalActionButton onPress={modalController}>
                <Styles.ActionButtonIcon source={closeIcon} />
              </Styles.ModalActionButton>
              <Styles.RowModal>
                <Styles.H1>{character.name}</Styles.H1>
              </Styles.RowModal>
              <Styles.RowModal>
                <Styles.ParagraphModal>
                  {character.description !== ''
                    ? character.description
                    : 'A Marvel hero'}
                </Styles.ParagraphModal>
              </Styles.RowModal>
            </Styles.ViewInfoModal>
          </Styles.ModalContent>
        </Styles.ModalContainer>
      </Modal>
    );
  };

  const Card = (item: ICharacterBody): ReactElement => {
    return (
      <Styles.CardContainer>
        <Styles.CardContent>
          <Styles.CardMedia
            resizeMode="cover"
            source={{
              uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
            }}
          />

          <Styles.ViewInfo>
            <Styles.Row>
              <Styles.Title numberOfLines={4}>{item.name}</Styles.Title>
            </Styles.Row>
            <Styles.CardFooter>
              <Styles.ActionButton onPress={() => modalController(item)}>
                <Styles.Row>
                  <Styles.ButtonTitle>More info</Styles.ButtonTitle>
                  <Styles.ButtonIcon source={backIcon} />
                </Styles.Row>
              </Styles.ActionButton>
            </Styles.CardFooter>
          </Styles.ViewInfo>
        </Styles.CardContent>
      </Styles.CardContainer>
    );
  };

  const refreshControl = (): void => {
    dispatch(CharActions.getCharacterListRequest());
  };

  const loadCharacters = (): void => {
    setPage(page + 1);

    const currentPage = page + 1;
    const offset = (currentPage - 1) * 20 + 1;
    dispatch(CharActions.getCharsPaginationRequest(offset));
  };

  return (
    <Styles.Container>
      <Header title="Characters" onBack={goBack} />
      {loading ? (
        <Loading />
      ) : (
        <Styles.Content>
          <FlatList
            data={characters}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => Card(item)}
            onRefresh={refreshControl}
            onEndReached={loadCharacters}
            onEndReachedThreshold={1}
            refreshing={refresh}
            showsVerticalScrollIndicator={false}
          />
        </Styles.Content>
      )}
      {modalVisible && CharacterModal()}
    </Styles.Container>
  );
};

export default Characters;
