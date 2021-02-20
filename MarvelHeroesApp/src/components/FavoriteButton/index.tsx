import React from 'react'

import Star from '../../assets/favorite.png'
import { IconContainer, Container, Image} from '../Search/styles'
import {Text, FavHeroButton} from './styles';

interface IFavorite {
    onPress():void 
}

const Favorite: React.FC<IFavorite> =  ({onPress}) => {
    return(
        <FavHeroButton onPress={onPress}>
            <Container>
                <IconContainer>
                    <Image source={Star} />
                </IconContainer>
                <Text>See your favorited Heroes</Text>  
            </Container>
        </FavHeroButton>
    )
}

export default Favorite;