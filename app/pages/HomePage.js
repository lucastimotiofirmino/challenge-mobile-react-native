import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  View,
  RefreshControl,
  FlatList,
  Text,
  Alert,
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';

import Loader from '../components/Loader';
import Field from '../components/Field';
import HeroCard, { CARD_HEIGHT } from '../components/HeroCard';

import { getHeroes } from '../actions/heroes';

import { filterWithQuerySearch } from '../common/helpers';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  info: {
    textAlign: 'center',
    marginBottom: 10,
  },
  flatList: {
    alignItems: 'center',
    paddingBottom: 200,
  },
  filters: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  endText: {
    marginTop: 10,
    marginBottom: 200,
    fontSize: 24,
  },
});

const CARD_LIMIT_PER_BATCH = 10;

const renderHeroCard = ({ item }) => <HeroCard {...item} />;
const heroKeyExtractor = (item) => `hero-${item.id}`;

const searchIcon = <Icon name="filter" size={24} color="#666" />;
const endList = <Text style={styles.endText}>That's all folks!!!</Text>;
const loader = <Loader />;

const InfoTextBar = ({ content }) => <Text style={styles.info}>{content}</Text>;

const HomePage = () => {
  const dispatch = useDispatch();
  const flatListRef = useRef();

  const [searchText, setSearchText] = useState('');

  const [loading, setLoading] = useState(false);
  const [filtersParams, setFilterParam] = useState({
    offset: 0,
    alphabetOrder: true,
    searchQuery: '',
  });

  const [onlyFavorites, setFavorites] = useState(false);

  const heroesNormal = useSelector((state) => state.heroes.heroes);
  const heroesNormalTotal = useSelector((state) => state.heroes.total);
  const hasNextPage = useSelector((state) => state.heroes.hasNext);

  // this below is stored as local
  const hereosFavorites = useSelector((state) => state.heroes.favorites);

  const heroes = onlyFavorites
    ? filterWithQuerySearch(hereosFavorites, searchText)
    : heroesNormal;
  const total = onlyFavorites ? heroes.length : heroesNormalTotal;

  resetList = () => {
    setLoading(false);
    setSearchText('');
    setFilterParam({ ...filtersParams, offset: 0, searchQuery: '' });
  };

  changeAndFetchOrder = async () => {
    setFilterParam({
      ...filtersParams,
      offset: 0,
      alphabetOrder: !filtersParams.alphabetOrder,
    });
  };

  changeToFavoritesOrNot = () => {
    setFavorites(!onlyFavorites);
    if (flatListRef.current) {
      flatListRef.current.scrollToOffset({ animated: false, offset: 0 });
    }
  };

  fetchSearch = () => {
    setFilterParam({ ...filtersParams, offset: 0, searchQuery: searchText });
  };

  fetchMore = () => {
    if (!loading && hasNextPage && searchText === '' && !onlyFavorites) {
      setFilterParam({
        ...filtersParams,
        offset: filtersParams.offset + CARD_LIMIT_PER_BATCH,
      });
    }
  };

  useEffect(() => {
    if (onlyFavorites) return;

    setLoading(true);

    dispatch(
      getHeroes({
        offset: filtersParams.offset,
        name: filtersParams.searchQuery,
        orderBy: filtersParams.alphabetOrder ? 'name' : '-name',
      }),
    )
      .catch((error) => Alert.alert(error.message))
      .done(() => {
        setLoading(false);
      });
  }, [filtersParams]);

  return (
    <View styles={styles.container}>
      <SearchBar
        platform={Platform.OS}
        onChangeText={(value) => setSearchText(value)}
        searchIcon={searchIcon}
        cancelIcon={searchIcon}
        onSubmitEditing={() => fetchSearch()}
        returnKeyType="search"
        clearIcon={
          <Icon
            name="close"
            size={18}
            color="#666"
            onPress={() => resetList()}
          />
        }
        cancelButtonTitle="Cancelar"
        placeholder="Filtre um herói da Marvel pelo nome"
        value={searchText}
      />

      <View style={styles.filters}>
        <Field
          text="Meus favoritos"
          icon="star"
          onPress={() => changeToFavoritesOrNot()}
          backgroundColor={onlyFavorites ? '#2E8C79' : '#44CBB1'}
        />
        {!onlyFavorites && (
          <Field
            text={
              filtersParams.alphabetOrder
                ? 'Ordem alfabética (a-z)'
                : 'Ordem alfabética (z-a)'
            }
            backgroundColor="#44CBB1"
            icon={filtersParams.alphabetOrder ? 'arrowdown' : 'arrowup'}
            onPress={() => changeAndFetchOrder()}
          />
        )}
      </View>

      <FlatList
        ref={flatListRef}
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={heroes}
        contentContainerStyle={styles.flatList}
        onEndReached={fetchMore}
        onEndReachedThreshold={0.9}
        extraData={[heroes, loading, searchText]}
        renderItem={renderHeroCard}
        keyExtractor={heroKeyExtractor}
        refreshControl={
          <RefreshControl
            refreshing={false}
            color="#000"
            onRefresh={() => resetList()}
          />
        }
        ListHeaderComponent={
          total > 0 && <InfoTextBar content={`${total} heróis`} />
        }
        ListEmptyComponent={
          total <= 0 &&
          !loading && <InfoTextBar content="Nenhum herói encontrado." />
        }
        ListFooterComponent={
          loading && hasNextPage
            ? loader
            : !hasNextPage && filtersParams.searchQuery === '' && endList
        }
        getItemLayout={(data, index) => ({
          length: CARD_HEIGHT,
          offset: CARD_HEIGHT * index,
          index,
        })}
      />
    </View>
  );
};

export default HomePage;
