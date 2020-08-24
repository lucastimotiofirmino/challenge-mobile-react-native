import React from 'react';
import {Label} from "./styles";

 const DescriptiveItems = ({label, align}) => {

    return (
        <Label align={align}>{label}</Label>
    );
};

export default DescriptiveItems;
