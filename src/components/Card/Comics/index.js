import React from 'react';
import {Wrapper} from "./styles";
import {CircleButton} from "../../index";
import {metrics} from "../../../theme";

const Comics = ({onPress, source}) => {
     return (
         <Wrapper imageStyle={{ borderRadius: metrics.baseRadius}} source={source}>
             <CircleButton onPress={onPress}/>
         </Wrapper>
     );
};

export default Comics;
