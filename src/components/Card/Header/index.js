import React from 'react';
import {Wrapper} from "./styles";
import {FavoriteButton} from "../../index";
import {metrics} from "../../../theme";

const Header = ({source}) => {
     return (
         <Wrapper imageStyle={{ borderRadius: metrics.doubleBaseRadius}} source={source}>
             <FavoriteButton/>
         </Wrapper>
     );
};

export default Header;
