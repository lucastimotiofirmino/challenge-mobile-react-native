import React, {useEffect, useState} from 'react';
import md5 from 'md5';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../services/api';
import {FlatList, ImageBackground, View} from 'react-native';
import HeroesItem from '../../components/HeroesItem';
import Description from '../../components/ModalDescription';
import Search from '../../components/Search';
import Favorite from '../../components/FavoriteButton';

import ImgBackground from '../../assets/background.png';

// import {PUBLIC_KEY, PRIVATE_KEY} from 'react-native-dotenv';

export interface HeroItem {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  events: Content;
  series: Content;
}
interface EventSummary {
  name: string;
}
interface Content {
  available: number;
  returned: number;
  collectionURI: string;
  items: EventSummary[];
}

const CounterHeroes = 100;

const HeroesList = ({navigation}:any) => {
  // const private_key = PRIVATE_KEY;
  // const public_key = PUBLIC_KEY;
  const private_key = '16054b8676397e756f32eb9f7e046e9aba8ff7a7';
  const public_key = 'f59b847961cec317a25fb4ef49d6a938';
  

  const timeStamp = 'timeStamp';
  const hash = md5(timeStamp + private_key + public_key);
  
  // console.log(heroes.map((hero) => hero.name));

  const [heroes, setHeroes] = useState<HeroItem[]>([]);
  const [offset, setoffset] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [touchedHero, setTouchedHero] = useState<HeroItem | undefined>();
  const [favoritedHeroIds, setFavoriteHeroIds] = useState<number[]>([]);
  
  const getHeroes = async () => {
    const response = await api(
      `/characters?&ts=${timeStamp}&apikey=${public_key}&hash=${hash}&limit=${CounterHeroes}&offset=${offset}`,
    );

  const newHeroes = response.data.data.results;
    setHeroes((previousHeroes) => [...previousHeroes, ...newHeroes]);
  };

  const searchHeroes = async (textToFind: string) => {
    const response = await api(
      `/characters?&ts=${timeStamp}&apikey=${public_key}&hash=${hash}&nameStartsWith=${textToFind}`,
    );
    setHeroes(response.data.data.results);
  };

  const favoritingHero = async(heroId: number) => {
    const parsedFavoriteString = JSON.stringify([...favoritedHeroIds, heroId]) 
    await AsyncStorage.setItem('@favorited', parsedFavoriteString)
    setFavoriteHeroIds([...favoritedHeroIds, heroId])
  }

  const unfavoritingHero = async(heroId: number) => {
    const newFavoriteHeroesIds = favoritedHeroIds.filter( id => id != heroId )
    const parsedFavoriteString = JSON.stringify(newFavoriteHeroesIds) 
    await AsyncStorage.setItem('@favorited', parsedFavoriteString)
    setFavoriteHeroIds(newFavoriteHeroesIds)
  }

  useEffect(() => {
    getHeroes();
  }, [offset]);
  
  useEffect(() => {
    AsyncStorage.getItem('@favorited').then((favorites) => {
      if (favorites !== null){
        const parsedFavoriteIds = JSON.parse(favorites);
        setFavoriteHeroIds(parsedFavoriteIds)
      }
    })
  }, [])

  return (
    <View style={{flex: 1}} >
      <ImageBackground source={ImgBackground} style={{flex: 1}}>
        <Search
          onEndSearch={(textToFind) => {
            if (!textToFind) {
              setIsSearching(false);
              setHeroes([]);
              getHeroes();
            } else {
              setIsSearching(true);
              searchHeroes(textToFind);
            }
          }}
        />
        <Favorite onPress={() => navigation.navigate('Favorites')}/>
        <FlatList
          data={heroes}
          keyExtractor={(i, index) => index.toString()}
          numColumns={2}
          onEndReached={() => {
            if (!isSearching) {
              setoffset((previousState) => previousState + CounterHeroes);
            }
          }}
          renderItem={({item}) => (
            <HeroesItem
              name={item.name}
              path={item.thumbnail.path}
              extension={item.thumbnail.extension}
              onHeroPress={() => {
                setModalVisible(true);
                setTouchedHero(item);
              }}
              onHeroFavorite={() => { 

                const isFavorited = favoritedHeroIds.includes(item.id);

                if(isFavorited) unfavoritingHero(item.id)
                else favoritingHero(item.id)
  
              }}
              isFavorited={favoritedHeroIds.includes(item.id)}
            />
          )}
        />
        <Description
          visible={modalVisible}
          onRequestClose={() => setModalVisible(!modalVisible)}
          touchedHero={touchedHero}
        />
        </ImageBackground>
    </View>
  );
};

export default HeroesList;
