import React, {useState, useEffect} from 'react';
import {useDispatch} from "react-redux";
import { FontAwesome } from '@expo/vector-icons';
import {Wrapper} from "./styles";
import {colors} from "../../../theme";
import {postFavorite} from "../../../redux/actions";

const Favorite = ({onPress, comics_id}) => {

    const [click, setClick] = useState(false);
    const dispatch = useDispatch();

    function toggleClick() {
        setClick(!click)
    }


    return (
        <Wrapper onPress={toggleClick()}>
            <FontAwesome name={click ? "heart" : "heart-o"} size={30} color={colors.black}/>
        </Wrapper>
    );
};

export default Favorite;

