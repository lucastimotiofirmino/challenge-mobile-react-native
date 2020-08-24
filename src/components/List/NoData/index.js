import React from 'react';
import {Wrapper} from "./styles";
import {Body, CircleButton} from "../../index";
import {metrics} from "../../../theme";

const NoData = () => {
     return (
         <Wrapper>
             <Body label="No noData found" align="center"/>
         </Wrapper>
     );
};

export default NoData;
