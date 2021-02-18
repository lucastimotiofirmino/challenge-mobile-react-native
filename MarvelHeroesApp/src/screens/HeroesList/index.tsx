import React, {useEffect, useState} from 'react';
import md5 from 'md5';
import {FlatList, 
    Image, 
        Text, 
        View} from 'react-native';
import api from '../../services/api';
import HeroesItem from '../../components/HeroesItem';
import Config from 'react-native-config';

interface HeroItem {
    id: number;
    name: string;
    thumbnail:{
        path: string;
        extension: string;
    }
}

const CounterHeroes = 8;

const HeroesList = () => {
    const private_key = '16054b8676397e756f32eb9f7e046e9aba8ff7a7';
    const public_key = 'f59b847961cec317a25fb4ef49d6a938';

    const timeStamp = 'timeStamp'
    const hash = md5(timeStamp + private_key + public_key);

    const [heroes, setHeroes] = useState<HeroItem[]>([])

    console.log(heroes.map(hero => hero.name ))

    const [offset, setoffset] = useState(1)


    const getHeroes = async () => {
        const response = await api(`/characters?&ts=${timeStamp}&apikey=${public_key}&hash=${hash}&limit=${CounterHeroes}&offset=${offset}`)
        
        const newHeroes = response.data.data.results;
        setHeroes(previousHeroes => ([...previousHeroes, ...newHeroes]))
    }

    useEffect(() => {
        getHeroes()
    },[offset])
    
    return (
    <View style={{flex: 1}}>
        <FlatList data={heroes}
                keyExtractor={(i, index) => index.toString()}
                numColumns={2}
                onEndReached = { () => 
                    setoffset( previousState => previousState + CounterHeroes)
                }
                renderItem={({ item }) =>
                <HeroesItem name={item.name} path={item.thumbnail.path} extension={item.thumbnail.extension} onHeroPress={ () => console.warn(item.name)}>
                </HeroesItem>}>
         </FlatList> 
    </View>
   )
}

export default HeroesList;