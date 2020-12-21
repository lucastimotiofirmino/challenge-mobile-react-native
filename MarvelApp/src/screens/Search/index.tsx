/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';

import {StackNavigationProp} from '@react-navigation/stack';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Header, {HeaderTypes} from '../../components/Header';
import {useColors} from '../../themes';
import {styles} from './style';
import {Favorites} from '../../store/ducks/favorites/types';
import HeroItem from '../../components/HeroItem';
import api from '../../services/api';
import Realm from 'realm';
import {FavoriteSchema} from '../../database/schemas/FavoriteSchema';

interface SearchScreenProps {
  navigation: StackNavigationProp<any>;
}

const SearchScreen: React.FC<SearchScreenProps> = (Props) => {
  const [textInput, setTextInput] = useState('');
  const [loading, setLoad] = useState(true);
  const [data, setData] = useState([]);
  const [dataName, setDataName] = useState([]);
  const [favorites, setFavoriteList] = useState([]);

  const colors = useColors();
  const style = styles(colors);
  const {navigation} = Props;

  useEffect(() => {
    Realm.open({schema: [FavoriteSchema]}).then((realm) => {
      const favorites = realm.objects('favorite');
      // @ts-ignore
      setFavoriteList(favorites);
    });

    if (data.length) {
      return;
    }
    loadData(0);
  }, []);

  // Api Request
  // @ts-ignore
  function loadData(offset: number): void {
    setLoad(true);
    api
      .get('/v1/public/characters', {
        params: {offset: offset},
      })
      .then(function (response) {
        const responseArray = response.data.data.results;
        setData(data.concat(responseArray));
        setLoad(false);
      })
      .catch(function (err) {
        console.log(err);
        setLoad(false);
      });
  }
  // Api Request
  // @ts-ignore
  function loadDataByName(offset: number): void {
    setLoad(true);
    api
      .get('/v1/public/characters', {
        params: {name: textInput, offset: offset},
      })
      .then(function (response) {
        const responseArray = response.data.data.results;
        setDataName(dataName.concat(responseArray));
        setLoad(false);
      })
      .catch(function (err) {
        console.log(err);
        setLoad(false);
      });
  }

  function renderHeroItem(item: Favorites): JSX.Element {
    let contains = false;

    for (let realmItem of favorites) {
      // @ts-ignore
      if (realmItem.name === item.name) {
        contains = true;
      }
    }

    return (
      <HeroItem
        isFavorite={contains}
        item={item}
        title={item.name}
        description={item.description}
        thumbImage={item.thumbnail.path + '.' + item.thumbnail.extension}
      />
    );
  }

  return (
    <>
      <StatusBar />
      <SafeAreaView style={style.containerSafe} />
      <SafeAreaView style={style.container}>
        <Header
          type={HeaderTypes.search}
          onPressBack={() => navigation.goBack()}
          getInputText={(text: string) => setTextInput(text)}
          onEndInput={() => {
            setDataName([]);
            loadDataByName(dataName.length);
          }}
        />
        <FlatList
          data={textInput.length > 0 ? dataName : data}
          renderItem={({item}) => renderHeroItem(item)}
          // @ts-ignore
          keyExtractor={(item) => item.id.toString()}
          onEndReached={() => {
            textInput.length > 0
              ? loadDataByName(dataName.length + 1)
              : loadData(data.length + 1);
          }}
        />
        {loading ? <ActivityIndicator color={colors.LABEL_1_COLOR} /> : null}
      </SafeAreaView>
    </>
  );
};

export default SearchScreen;
