import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import HomeComponent from '../components/Home/Home';
import store from '../store/index';
import {setCharacters} from '../store/slices/characters';
import api from '../utils/api';
import {getData, storeData} from '../utils/asyncStorage';
import {appEnum} from '../utils/enum';

const HomeContainer: React.FC = () => {
  const {characters} = store.getState();

  const [isLoading, setIsLoading] = useState(false);
  const [selected, setSelected] = useState(characters?.selected);
  const [favorites, setFavorites] = useState([]);
  const [filterType, setFilterType] = useState(appEnum.FILTER_TYPE.TYPE_1);

  const loadMore = async () => {
    setIsLoading(true);
    await api
      .get('/v1/public/characters', {
        params: {
          orderBy: 'name',
          offset: characters?.offset + characters?.count,
        },
      })
      .then(res => {
        if (res.data.code === 200) {
          const {offset, total, count, results} = res.data?.data;
          const newValue = {
            offset,
            total,
            count,
            data: characters.data.concat(results),
          };
          store.dispatch(setCharacters(newValue));
        }
      })
      .catch(err => {
        console.log('error request', err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const onSeletcCharacter = character => {
    const newValue = {
      selected: character,
    };
    store.dispatch(setCharacters(newValue));
    setSelected(character);
  };

  const onFavorite = async character => {
    const data = await getData();
    if (data) {
      const isAlready = data.filter(f => f.id === character?.id);
      if (!isAlready.length) {
        data.push(character);
        storeData(data);
        setFavorites(data);
      } else {
        const newArray = data.filter(f => f.id !== character?.id);
        storeData(newArray);
        setFavorites(newArray);
      }
    } else {
      const newArray = [];
      newArray.push(character);
      storeData(newArray);
      setFavorites(newArray);
    }
  };

  const onChangeFilterType = newType => {
    setFilterType(newType);
  };

  useEffect(() => {
    loadMore();
    getData().then(data => {
      setFavorites(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <HomeComponent
      characters={characters?.data}
      selectedCharacter={selected}
      loadMore={loadMore}
      isLoading={isLoading}
      onSeletcCharacter={onSeletcCharacter}
      onFavorite={onFavorite}
      favorites={favorites}
      filterType={filterType}
      onChangeFilterType={onChangeFilterType}
    />
  );
};

export default connect()(HomeContainer);
