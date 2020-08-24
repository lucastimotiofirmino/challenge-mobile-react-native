import React, {useState, useEffect} from 'react';
import { FontAwesome } from '@expo/vector-icons';
import {Wrapper} from "./styles";
import {colors} from "../../../theme";

const Favorite = ({onPress}) => {

    const [click, setClick] = useState(false);

    function toggleClick() {
        setClick(!click)
    }

    return (
        <Wrapper onPress={toggleClick}>
            <FontAwesome name={click ? "heart" : "heart-o"} size={30} color={colors.black}/>
        </Wrapper>
    );
};

export default Favorite;

