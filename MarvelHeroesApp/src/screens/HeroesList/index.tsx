import React, {useEffect, useState} from 'react';
import md5 from 'md5';
import {FlatList, Image, Text, View} from 'react-native';
import api from '../../services/api';
import HeroesItem from '../../components/HeroesItem';
import Description from '../../components/ModalDescription';
import Search from '../../components/Search';

export interface HeroItem {
  id: number,
  name: string,
  description: string,
  thumbnail: {
    path: string;
    extension: string;
  };
  events: Content
  series: Content
}
interface EventSummary{
name: string
}
interface Content{
available: number
returned: number
collectionURI: string;
items:  EventSummary[]
}

const CounterHeroes = 100;

const HeroesList = () => {
  const private_key = '16054b8676397e756f32eb9f7e046e9aba8ff7a7';
  const public_key = 'f59b847961cec317a25fb4ef49d6a938';

  const timeStamp = 'timeStamp';
  const hash = md5(timeStamp + private_key + public_key);

  const [heroes, setHeroes] = useState<HeroItem[]>([]);

  console.log(heroes.map((hero) => hero.name));

  const [offset, setoffset] = useState(1);

  const [modalVisible, setModalVisible] = useState(false);

  const [isSearching, setIsSearching] = useState(false);

  const [touchedHero, setTouchedHero] = useState<HeroItem | undefined >();
  const getHeroes = async () => {
    const response = await api(
      `/characters?&ts=${timeStamp}&apikey=${public_key}&hash=${hash}&limit=${CounterHeroes}&offset=${offset}`,
    );

    const newHeroes = response.data.data.results;
    setHeroes((previousHeroes) => [...previousHeroes, ...newHeroes]);
  };

  const searchHeroes = async (textToFind:string) => {
    const response = await api(
      `/characters?&ts=${timeStamp}&apikey=${public_key}&hash=${hash}&nameStartsWith=${textToFind}`
      
    )
    setHeroes(response.data.data.results)
  }

  useEffect(() => {
    getHeroes();
  }, [offset]);

  return (
    <View style={{flex: 1}}>
      <Search onEndSearch = { (textToFind) => {
        if (!textToFind){
          setIsSearching(false)
          setHeroes([])
          getHeroes()
        } 
        else{
          setIsSearching(true) 
          searchHeroes(textToFind)
        }

      }  } />
      <FlatList
        data={heroes}
        keyExtractor={(i, index) => index.toString()}
        numColumns={2}
        onEndReached={() =>
          {
            if (!isSearching) setoffset((previousState) => previousState + CounterHeroes)
          }
        }
        renderItem={({item}) => (
          <HeroesItem
            name={item.name}
            path={item.thumbnail.path}
            extension={item.thumbnail.extension}
            onHeroPress={() => {
              setModalVisible(true) 
              setTouchedHero(item)
            }
          }
            
          />
        )}
      />
      <Description visible = {modalVisible} onRequestClose={() => setModalVisible(!modalVisible)} touchedHero = {touchedHero} />
    </View>
  );
};

export default HeroesList;
