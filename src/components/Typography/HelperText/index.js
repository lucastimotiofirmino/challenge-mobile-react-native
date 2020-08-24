import React from 'react';
import {Label} from "./styles";

 const HelperText = ({label, align}) => {

    return (
        <Label align={align}>{label}</Label>
    );
};

export default HelperText;
