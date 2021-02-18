import React, { useState, ReactNode } from 'react'

import {Container, Image, Text} from './styles'; 

export interface HeroesItemProps {
    name: string;
    path: string;
    extension: string;
    onHeroPress (): void
}

const HeroesItem: React.FC<HeroesItemProps> = ({ name, path, extension, onHeroPress}) => {
    return ( 

        <Container onPress={onHeroPress} >
            <Image source={{uri: `${path}.${extension}`}}/>
            <Text>{name}</Text>
        </Container>

    )
}

export default HeroesItem