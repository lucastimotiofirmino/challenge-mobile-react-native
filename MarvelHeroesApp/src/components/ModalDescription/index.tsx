import React, {useState} from 'react';
import {Container, Image} from './styles';
import {Text, Button} from 'react-native';
import {HeroItem} from '../../screens/HeroesList'

interface ModalProps {
  visible: boolean;
  onRequestClose():void;
  touchedHero: HeroItem | undefined;
}

const Description: React.FC <ModalProps> = ({visible, onRequestClose, touchedHero}) => {
  return (
    <Container visible={visible} onRequestClose={onRequestClose}>
      <Image source={{uri: `${touchedHero?.thumbnail.path}.${touchedHero?.thumbnail.extension}`}}/>
      <Text> {touchedHero?.name} </Text>
      <Text> {touchedHero?.description} </Text>
      <Text>Events</Text>
      {touchedHero?.events.items.map((event)=>{
        return <Text> {event.name} </Text>
      })}
      <Text>Series</Text>
      {touchedHero?.series.items.map((serie)=>{
        return <Text> {serie.name} </Text>
      })}
    </Container>
  );
};

export default Description;
