import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {FlatList, StatusBar, Modal} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {loadCharactersRequest} from '../../store/characters/actions';
import {getFavorites, saveFavorites} from '../../store/favorites/actions';
import {useFavorites} from '../../hooks/favorites';
import {Character} from '../../interfaces';
import CharacterItem from '../../components/CharacterItem';
import ModalDetails from '../../components/ModalDetails';
import logo from '../../assets/marvel.jpeg';
import Button from '../../components/Button';
import Colors from '../../utils/colors';
import {
  Container,
  LogoView,
  ImageLogo,
  CharactersTitle,
  Background,
  TopView,
  FilterContainer,
  FilterTextInput,
  FavoritosFilterView,
  FavoritosFilterText,
  Row,
} from './styles';

const Main: React.FC = () => {
  const dispatch = useDispatch();
  const {favorites, loadFavorites} = useFavorites();
  const {characters, loading} = useSelector((store) => store.characters);
  const [offset, setOffset] = useState<number>(0);
  const [showModal, setShowModal] = useState(false);
  const [itemSelected, setItemSelected] = useState<Character | null>(null);
  const [filterFavorites, setFilterFavorites] = useState(false);
  const [filterName, setFilterName] = useState<string>('');
  const [filtered, setFiltered] = useState<Character[]>([]);

  useEffect(() => {
    dispatch(loadCharactersRequest(offset));
  }, [loadCharactersRequest, getFavorites, offset]);

  const toggleFavorite = (id: number) => {
    const isFavorited = favorites.findIndex((item: number) => item === id);
    if (isFavorited >= 0) {
      const items = favorites.filter((item: number) => item !== id);
      dispatch(saveFavorites(items));
    } else {
      dispatch(saveFavorites([...favorites, id]));
    }
    loadFavorites();
  };

  const openDetails = (item: Character) => {
    setItemSelected(item);
    console.log(item);
    setShowModal(true);
  };

  const search = () => {
    let data: Array<Character> = [];
    if (filterName.length > 0) {
      data = characters.filter((char: any) =>
        char.name.toLowerCase().includes(filterName.toLowerCase()),
      );
    }

    if (filterFavorites) {
      data = data.filter(({id}) => favorites.includes(id));
    }

    setFiltered(data);
  };

  const renderItem = (item: Character) => {
    return (
      <CharacterItem
        onPress={() => openDetails(item)}
        imagePath={`${item.thumbnail.path}.${item.thumbnail.extension}`}
        name={item.name}
        isFavorite={favorites && favorites.includes(item.id)}
        favoriteOnPress={() => toggleFavorite(item.id)}
      />
    );
  };

  return (
    <Background>
      <StatusBar barStyle="light-content" backgroundColor={Colors.black} />
      <Container>
        <FlatList
          data={filterName.length > 0 ? filtered : characters}
          onRefresh={() => setOffset(0)}
          onEndReached={() => setOffset(offset + 20)}
          onEndReachedThreshold={0.5}
          refreshing={loading}
          keyExtractor={({id}) => id}
          renderItem={({item}) => renderItem(item)}
          ListHeaderComponent={() => (
            <TopView>
              <LogoView>
                <ImageLogo source={logo} />
                <CharactersTitle>Personagens</CharactersTitle>
              </LogoView>
              <FilterContainer>
                <FilterTextInput
                  defaultValue={filterName}
                  placeholder="Escreva o nome do personagem"
                  onChangeText={(value) => {
                    setFilterName(value);
                  }}
                />
                <Row>
                  <FavoritosFilterView>
                    <CheckBox
                      disabled={false}
                      value={filterFavorites}
                      onValueChange={(value: boolean) =>
                        setFilterFavorites(value)
                      }
                    />
                    <FavoritosFilterText>Meus favoritos</FavoritosFilterText>
                  </FavoritosFilterView>
                  <Button onPress={() => search()}>Aplicar</Button>
                </Row>
              </FilterContainer>
            </TopView>
          )}
        />
        <Modal statusBarTranslucent transparent visible={showModal}>
          <ModalDetails
            isFavorite={
              favorites && itemSelected
                ? favorites.includes(itemSelected.id)
                : false
            }
            item={itemSelected}
            close={() => setShowModal(false)}
          />
        </Modal>
      </Container>
    </Background>
  );
};

export default Main;
