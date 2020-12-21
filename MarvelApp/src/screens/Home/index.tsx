import React, {useEffect, useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {FlatList, SafeAreaView, StatusBar, View, Text} from 'react-native';
import {useColors} from '../../themes';
import {styles} from './style';
import {ROUTES} from '../../router';
import {Favorites} from '../../store/ducks/favorites/types';
import {useSizes, useWindowSizes} from '../../constants/sizes';
import {FavoriteSchema} from '../../database/schemas/FavoriteSchema';

import LottieView from 'lottie-react-native';
import HeroItem from '../../components/HeroItem';
// @ts-ignore
import animation from '../../assets/happy-heart.json';
import Header, {HeaderTypes} from '../../components/Header';
import Realm from 'realm';
import {HOME_SCREEN} from '../../constants/strings';

interface HomeScreenProps {
  navigation: StackNavigationProp<any>;
}

const HomeScreen: React.FC<HomeScreenProps> = (Props) => {
  const {navigation} = Props;

  const windowSize = useWindowSizes();
  const colors = useColors();
  const sizes = useSizes();
  const style = styles(colors, windowSize, sizes);

  const [favorites, setFavoriteList] = useState([]);

  useEffect(() => {
    Realm.open({schema: [FavoriteSchema]}).then((realm) => {
      const favorites = realm.objects('favorite');
      // @ts-ignore
      setFavoriteList(favorites);
    });
  }, [favorites]);

  function renderHeroItem(item: Favorites): JSX.Element {
    return (
      <HeroItem
        isFavorite={true}
        item={item}
        title={item.name}
        description={item.description}
        thumbImage={item.thumbnail.toString()}
      />
    );
  }

  return (
    <>
      <StatusBar />
      <SafeAreaView style={style.containerSafe} />
      <SafeAreaView style={style.container}>
        <Header
          type={HeaderTypes.home}
          onPressSearch={() => navigation.navigate(ROUTES.Search)}
        />
        {favorites.length > 0 ? (
          <FlatList
            style={style.listContainer}
            data={favorites}
            renderItem={({item}) => renderHeroItem(item)}
            // @ts-ignore
            keyExtractor={(item) => item.id.toString()}
          />
        ) : (
          <View style={style.letteringContainer}>
            <View style={style.animationContainer}>
              <LottieView source={animation} loop autoPlay />
            </View>
            <Text style={style.labelTitle}> {HOME_SCREEN.description} </Text>
          </View>
        )}
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;
