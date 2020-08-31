import React, { useEffect, useState } from 'react';
import { RefreshControl, StatusBar, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Colors } from '../../styles';
import { loadHeroesRequest } from '../../redux/actions/heroes';
import { addFavorite, removeFavorite } from '../../redux/actions/favorites';
import { Background, Container } from '../../components/organisms';
import { Hero, HeroesState } from '../../redux/actions/heroes/types';
import { HeroCard, SearchBox, Warning } from '../../components/molecules';

export function homeNavigationOptions<Props>() {
  return {
    headerShown: false,
    headerTitle: 'Home',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
}

const Home: React.FC = ({ navigation }) => {
  const dispatch = useDispatch();
  const { heroes, loading } = useSelector<HeroesState>((state) => state.heroes);
  const { savedFavorites } = useSelector((state) => state.favorites);
  const [offset, setOffset] = useState<number>(0);
  const [filterByName, setFilterByName] = useState<string>('');

  useEffect(() => {
    dispatch(loadHeroesRequest(offset, filterByName));
  }, [dispatch, offset, filterByName]);

  const searchByname = (name: string) => {
    setFilterByName(name);
    setOffset(0);
    dispatch(loadHeroesRequest(0, filterByName));
    [];
  };

  const resetSearch = () => {
    setFilterByName('');
    setOffset(0);
  };

  const handleFavorite = (item: Hero) => {
    const isFavorite = savedFavorites.findIndex((x: any) => x.id === item.id);
    console.log(savedFavorites);
    if (isFavorite >= 0) {
      dispatch(removeFavorite(item));
    } else {
      dispatch(addFavorite(item));
    }
  };

  const renderItem = (item: Hero) => {
    return (
      <HeroCard
        onPress={() => {
          navigation.navigate('Detail', {
            itemId: item,
          });
        }}
        uniqueId={item.id.toString()}
        name={item.name}
        imageSource={`${item.thumbnail.path}.${item.thumbnail.extension}`}
        favorite={
          savedFavorites.findIndex((x: any) => x.id === item.id) >= 0
            ? true
            : false
        }
        favoriteOnpress={() => handleFavorite(item)}
      />
    );
  };

  return (
    <Background>
      <StatusBar barStyle="light-content" backgroundColor={Colors.BLACK} />
      <Container>
        <FlatList
          numColumns={2}
          data={heroes}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => renderItem(item)}
          onEndReached={() => setOffset(offset + 20)}
          onEndReachedThreshold={0.5}
          stickyHeaderIndices={[0]}
          ListEmptyComponent={() => (
            <Warning title="No results" description="Cannot find the keyword" />
          )}
          refreshControl={
            <RefreshControl
              refreshing={loading}
              onRefresh={() => setOffset(0)}
              title="Deslize para atualizar"
              tintColor={Colors.WHITE}
              titleColor={Colors.WHITE}
            />
          }
          ListHeaderComponent={
            <SearchBox
              onPress={resetSearch}
              value={filterByName}
              placeholder="Buscar personagem Marvel"
              onChangeText={searchByname}
              showCloseButton={filterByName.length > 0 ? true : false}
            />
          }
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-start' }}
        />
      </Container>
    </Background>
  );
};

export default Home;
