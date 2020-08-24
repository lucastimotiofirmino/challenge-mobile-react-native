import React from 'react';
import {Wrapper, Thumbnail} from './styles';
import animation from '../../assets/images/animation.gif';

const Loading = () => {
  return (
      <Wrapper>
        <Thumbnail source={animation} color="#333" />
      </Wrapper>
  );
};

export default Loading;
