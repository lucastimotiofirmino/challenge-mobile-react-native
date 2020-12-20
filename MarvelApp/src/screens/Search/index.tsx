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
import {useDispatch} from 'react-redux';
import api from '../../service/api';
import * as actions from '../../store/ducks/favorites/actions';

interface SearchScreenProps {
  navigation: StackNavigationProp<any>;
}

const SearchScreen: React.FC<SearchScreenProps> = (Props) => {
  const [textInput, setTextInput] = useState('');
  const [loading, setLoad] = useState(true);
  const [data, setData] = useState([]);
  const [dataName, setDataName] = useState([]);

  const colors = useColors();
  const style = styles(colors);
  const {navigation} = Props;
  const dispatch = useDispatch();

  useEffect(() => {
    if (data.length) {
      return;
    }
    loadData(0);
  }, [data.length, loadData]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
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

  // eslint-disable-next-line react-hooks/exhaustive-deps
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
    return (
      <HeroItem
        title={item.name}
        description={item.description}
        thumbImage={item.thumbnail.path + '.' + item.thumbnail.extension}
        onPressFavorite={() => addFavorite(item)}
      />
    );
  }

  function addFavorite(item: Favorites) {
    dispatch(actions.addFavorite(item));
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
