import React, { useEffect, useState } from 'react';
import { RefreshControl, StatusBar, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Colors } from '../../styles';
import { loadHeroesRequest } from '../../redux/actions/heroes';
import { addFavorite, removeFavorite } from '../../redux/actions/favorites';
import { Background, Container } from '../../components/organisms';
import { Hero, HeroesState } from '../../redux/actions/heroes/types';
import { HeroCard, Warning } from '../../components/molecules';

export function favoritesNavigationOptions<Props>() {
  return {
    headerShown: false,
    headerTitle: 'Favoritos',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
}

const Favorites: React.FC = ({ navigation }) => {
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
          data={savedFavorites}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => renderItem(item)}
          onEndReached={() => setOffset(offset + 20)}
          onEndReachedThreshold={0.5}
          ListEmptyComponent={() => (
            <Warning
              title="List is empty"
              description="Add your heroes to your favorites"
            />
          )}
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-start' }}
        />
      </Container>
    </Background>
  );
};

export default Favorites;
