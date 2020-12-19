import React, {useState, useEffect} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  SafeAreaView,
  StatusBar,
  Text,
  FlatList,
  ListRenderItemInfo,
} from 'react-native';
import Header, {HeaderTypes} from '../../components/Header';
import {useColors} from '../../themes';
import {styles} from './style';
import {useDispatch, useSelector} from 'react-redux';

import * as actions from '../../store/ducks/heroes/actions';
import {Heroes, HeroesState} from '../../store/ducks/heroes/types';

interface SearchScreenProps {
  navigation: StackNavigationProp<any>;
}

const SearchScreen: React.FC<SearchScreenProps> = (Props) => {
  const style = styles(useColors());
  const {navigation} = Props;

  const heroes = useSelector<{heroes: HeroesState}>(
    (state) => state.heroes.data,
  );

  function renderHeroItem(item: ListRenderItemInfo<Heroes>): JSX.Element {
    return <Text>{item.item.name}</Text>;
  }

  return (
    <>
      <StatusBar />
      <SafeAreaView style={style.containerSafe} />
      <SafeAreaView style={style.container}>
        <Header
          type={HeaderTypes.search}
          onPressBack={() => navigation.goBack()}
        />
        {/**
         <FlatList
         data={heroes.data.results}
         renderItem={(item: ListRenderItemInfo<Heroes>) =>
            renderHeroItem(item)
          }
         keyExtractor={(item) => item.id}
         />

         **/}
      </SafeAreaView>
    </>
  );
};

export default SearchScreen;
