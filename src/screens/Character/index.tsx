import React, { useState, ReactElement, useEffect } from 'react';
import { FlatList, View, Modal, Image, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

import * as CharActions from '../../store/modules/Characters/actions';
import { RootState } from '../../store/modules/rootReducer';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import { getItemStorage, saveItemStorage } from '../../utils/storage';

import backIcon from '../../assets/icons/arrow-rigth.png';
import closeIcon from '../../assets/icons/close.png';
import favoriteIcon from '../../assets/icons/favorite.png';
import unFavoriteIcon from '../../assets/icons/unfavorite.png';
import searchIcon from '../../assets/icons/search.png';

import * as Styles from './styles';

interface ICharacterBody {
  id: string;
  name: string;
  description: string;
  favorite: boolean;
  thumbnail: {
    path: string;
    extension: string;
  };
}

const Characters: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalFilterVisible, setModalFilterVisible] = useState(false);
  const [page, setPage] = useState(1);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [listCharacter, setListCharacter] = useState<ICharacterBody[]>([]);
  const [textSearch, setTextSearch] = useState('');
  const [execPaginate, setExecPaginate] = useState(true);
  const [character, setCharacter] = useState<ICharacterBody>({
    id: '',
    name: '',
    description: '',
    favorite: false,
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
    (async () => {
      const favorite = await getItemStorage('@favorite');
      if (favorite != null) {
        setFavorites(favorite);
      }
    })();
  }, []);

  useEffect(() => {
    dispatch(CharActions.getCharacterListRequest());
  }, []);

  useEffect(() => {
    setListCharacter(
      characters.map(item => {
        if (favorites.length > 0) {
          const fav = favorites.find(e => e === item.id);
          if (fav > 0) {
            return { ...item, favorite: true };
          }
          return { ...item, favorite: false };
        }
        return { ...item, favorite: false };
      }),
    );
  }, [characters, favorites]);

  const goBack = (): void => {
    navigation.goBack();
  };

  const onFilter = (): void => {
    setModalFilterVisible(!modalFilterVisible);
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

  const handleFilterFavorite = (): void => {
    setExecPaginate(false);
    setListCharacter(
      listCharacter.filter(item => {
        if (item.favorite) {
          return item;
        }
      }),
    );
  };

  const handleFavor = (id: string, fav: boolean): void => {
    const valor = favorites;

    if (!fav) {
      valor.push(id);

      setFavorites(valor);

      saveItemStorage('@favorite', valor);

      setListCharacter(
        listCharacter.map(item => {
          if (item.id === id) {
            return { ...item, favorite: true };
          }

          return item;
        }),
      );
    } else {
      valor.splice(valor.indexOf(id), 1);

      setFavorites(valor);

      saveItemStorage('@favorite', valor);

      setListCharacter(
        listCharacter.map(item => {
          if (item.id === id) {
            return { ...item, favorite: false };
          }

          return item;
        }),
      );
    }
  };

  const handleFilterHero = () => {
    setExecPaginate(false);
    setListCharacter(
      listCharacter.filter(item => {
        if (item.name.toUpperCase() === textSearch.toUpperCase()) {
          return item;
        }
      }),
    );

    setModalFilterVisible(!modalFilterVisible);
    setTextSearch('');
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
              <Styles.ActionButton
                onPress={(): void => handleFavor(item.id, item.favorite)}
              >
                <Styles.IconFavorite
                  source={item.favorite ? favoriteIcon : unFavoriteIcon}
                />
              </Styles.ActionButton>
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
    if (execPaginate) {
      setPage(page + 1);

      const currentPage = page + 1;
      const offset = (currentPage - 1) * 20 + 1;
      dispatch(CharActions.getCharsPaginationRequest(offset));
    } else {
      setExecPaginate(true);
    }
  };

  const handleChangeSearch = (text: string): void => {
    setTextSearch(text);
  };

  return (
    <Styles.Container>
      <Header
        title="Characters"
        onBack={goBack}
        onFilter={onFilter}
        onFavorite={handleFilterFavorite}
      />
      {modalFilterVisible && (
        <Styles.ViewSearch>
          <Styles.InputNameHero
            placeholder="Hero name"
            placeholderTextColor="#ccc"
            onChangeText={(text: string): void => handleChangeSearch(text)}
            value={textSearch}
          />
          <TouchableOpacity onPress={handleFilterHero}>
            <Styles.ImageSearch source={searchIcon} />
          </TouchableOpacity>
        </Styles.ViewSearch>
      )}

      {loading ? (
        <Loading />
      ) : (
        <Styles.Content>
          <FlatList
            data={listCharacter}
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
