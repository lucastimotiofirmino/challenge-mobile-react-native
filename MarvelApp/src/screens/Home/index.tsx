import React, {useEffect} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  SafeAreaView,
  StatusBar,
  Text,
  FlatList,
  ScrollView,
} from 'react-native';
import Header, {HeaderTypes} from '../../components/Header';
import {useIsFocused} from '@react-navigation/native';
import {useColors} from '../../themes';
import {styles} from './style';
import {ROUTES} from '../../router';
import {useSelector} from 'react-redux';
import {Favorites, FavoriteState} from '../../store/ducks/favorites/types';
import {useWindowSizes} from '../../constants/sizes';
import HeroItem from '../../components/HeroItem';

interface HomeScreenProps {
  navigation: StackNavigationProp<any>;
}

const HomeScreen: React.FC<HomeScreenProps> = (Props) => {
  const {navigation} = Props;
  const windowSize = useWindowSizes();
  const colors = useColors();
  const style = styles(colors, windowSize);
  const isFocused = useIsFocused();

  let data = useSelector((state: FavoriteState) => state.data);

  useEffect(() => {
    console.log('FOCADO');
    console.log(data);
  }, [isFocused, Props]);

  function renderHeroItem(item: Favorites): JSX.Element {
    return (
      <HeroItem
        title={item.name}
        description={item.description}
        thumbImage={item.thumbnail.path + '.' + item.thumbnail.extension}
        onPressFavorite={() => {
          console.log('MERDA');
        }}
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
        <FlatList
          style={style.listContainer}
          data={data.data}
          renderItem={({item}) => renderHeroItem(item)}
          keyExtractor={(item) => item.id.toString()}
        />
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;
