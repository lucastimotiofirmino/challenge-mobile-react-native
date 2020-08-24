import React from 'react';
import {Wrapper, Center} from "./styles";
import {IconButton} from "../../index";
import {colors} from "../../../theme";
import {FontAwesome} from "../Icon/styles";

const CircleButton = ({onPress}) => {

    const shadowEffect = {
        shadowColor: colors.shadow,
        shadowOffset: {
            width: 2,
            height: 7,
        },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 5,
    }

    return (
        <Wrapper style={{...shadowEffect}}>
           <Center hitSlop={{top: 30, bottom: 30, left: 30, right: 30}} onPress={onPress}>
               <FontAwesome name="play" size={40} color={'black'}/>
           </Center>
        </Wrapper>
    );
};

export default CircleButton;
