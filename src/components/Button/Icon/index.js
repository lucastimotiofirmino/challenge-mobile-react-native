import React from 'react';
import {Wrapper, FontAwesome, SimpleLine} from "./styles";

 const IconButton = ({onPress, icon, size, color, fontAwesome}) => {

    return (
        <Wrapper onPress={onPress} hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}>
            { fontAwesome
                ?
                <FontAwesome name={icon} size={size ? size : 24} color={color}/>
                :
                <SimpleLine name={icon} size={size ? size : 24} color={color}/>
            }

        </Wrapper>
    );
};

export default IconButton;
