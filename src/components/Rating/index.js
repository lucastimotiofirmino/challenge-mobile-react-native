import React from 'react';
import {Wrapper, Star} from "./styles";
import {HelperText} from "../index";

const IconButton = ({label, align, issue}) => {

    return (
        <Wrapper>
            <Star name="star" size={14}/>
            <HelperText label={label} align={align}/>
            <HelperText label={" - issue " + issue} align={align}/>
        </Wrapper>
    );
};

export default IconButton;
