import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, FlatList, Platform } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {
  getCharactersRequestAction,
  getSearchCharacterRequestAction,
  setShowModal,
  getDetailCharacterRequestAction,
  setFavoritePersonAction,
} from '../../store/modules/characters/actions';
import { Container, FilterContainer } from './styles';
import { IState } from '../../store';
import { ICharactersType } from '../../store/modules/characters/types';
import Header from '../../components/Header';
import Card from '../../components/Card';
import SearchInput from '../../components/SearchInput';
import Modal from '../../components/Modal';
import KeyStorage from '../../utils/enums';

const Home = (): JSX.Element => {
  const {
    itemsCharacters,
    infoResult,
    loadingCharacters,
    characterDetail,
    openModalDetail,
    favoriteCharacters,
  } = useSelector((state: IState) => state.characters);
  // const [loadingMoreItems, setLoadingMoreItems] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [localCharactersType, setLocalCharactersType] = useState<
    ICharactersType[]
  >();
  let bouncyCheckboxRef: BouncyCheckbox | null = null;
  const [checkboxState, setCheckboxState] = React.useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharactersRequestAction(10, 1));
    async function getLocalStorage(): Promise<any> {
      const storeLocalFavorites = await AsyncStorage.getItem(
        KeyStorage.charactersLocal,
      );

      if (storeLocalFavorites) {
        setLocalCharactersType(JSON.parse(storeLocalFavorites));
      } else {
        console.log('not local');
      }
    }
    getLocalStorage();
  }, [dispatch, openModalDetail, favoriteCharacters]);

  const loadPage = (): void => {
    if (infoResult?.offset === infoResult?.total) {
      return;
    }
    if (searchValue) {
      return;
    }
    dispatch(
      getCharactersRequestAction(
        10 + infoResult?.limit,
        infoResult?.offset + 1,
      ),
    );
  };
  const renderSeparator = (): JSX.Element => {
    return <View style={{ height: 20 }} />;
  };

  function filterSearchFavorits(text: string): void {
    if (text.length > 0) {
      // this.setState({ visibleListBairro: true })
      const newData = localCharactersType?.filter(function (item) {
        const itemData = item.name.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setLocalCharactersType(newData);
    } else {
      setSearchValue('');
      // setLocalCharactersType(localCharactersType);
    }
  }
  const searchCharacter = (e: string): void => {
    setSearchValue(e);
    if (checkboxState) {
      if (e.length) {
        filterSearchFavorits(e);
      }
    } else {
      dispatch(getSearchCharacterRequestAction(e));
      if (!e.length) {
        dispatch(getCharactersRequestAction(10, 1));
      }
    }
  };

  const renderHeaderComponent = (): JSX.Element => {
    return (
      <>
        <FilterContainer>
          <Header />

          <SearchInput
            value={searchValue}
            onChangeText={e => searchCharacter(e)}
            placeholder="Qual personagem você procura?"
          />
          <View
            style={{
              marginBottom: 20,
              width: '100%',
              alignItems: 'center',
            }}
          >
            <BouncyCheckbox
              ref={(ref: any) => (bouncyCheckboxRef = ref)}
              isChecked={checkboxState}
              text="Filtrar Por Favoritos"
              disableBuiltInState
              onPress={() => setCheckboxState(!checkboxState)}
            />
          </View>
        </FilterContainer>
      </>
    );
  };
  return (
    <Container>
      {loadingCharacters && <ActivityIndicator size={25} color="black" />}
      {checkboxState ? (
        <FlatList
          ListHeaderComponent={renderHeaderComponent()}
          data={localCharactersType}
          keyExtractor={item => item.name}
          renderItem={({ item }) => (
            <Card
              onPress={() => {
                dispatch(getDetailCharacterRequestAction(item.id));
              }}
              imageUrl={`${item.thumbnail.path.replace('http', 'https')}.${
                item.thumbnail.extension
              }`}
              namePerson={item.name}
            />
          )}
          horizontal={false}
          showsVerticalScrollIndicator
          ItemSeparatorComponent={() => renderSeparator()}
          onEndReachedThreshold={Platform.OS === 'ios' ? 0 : 0.1}
        />
      ) : (
        <FlatList
          ListHeaderComponent={renderHeaderComponent()}
          data={itemsCharacters}
          keyExtractor={item => item.name}
          renderItem={({ item }) => (
            <Card
              onPress={() => {
                dispatch(getDetailCharacterRequestAction(item.id));
              }}
              imageUrl={`${item.thumbnail.path.replace('http', 'https')}.${
                item.thumbnail.extension
              }`}
              namePerson={item.name}
            />
          )}
          horizontal={false}
          showsVerticalScrollIndicator
          ItemSeparatorComponent={() => renderSeparator()}
          onEndReachedThreshold={Platform.OS === 'ios' ? 0 : 0.1}
          onEndReached={() => loadPage()}
        />
      )}

      <Modal
        show={openModalDetail}
        data={characterDetail}
        close={() => dispatch(setShowModal(false))}
      />
    </Container>
  );
};

export default Home;
