import React from 'react';
import {Container} from './styles';

interface EventData {
  data: Marvel.EventList | undefined;
}

function Event({data}: EventData) {
  console.log(data?.items);
  return <Container />;
}

export default Event;
