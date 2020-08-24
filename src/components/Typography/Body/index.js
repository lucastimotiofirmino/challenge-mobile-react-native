import React from 'react';
import {Label} from "./styles";

 const Body = ({label, align}) => {

    return (
        <Label align={align}>{label}</Label>
    );
};

export default Body;
