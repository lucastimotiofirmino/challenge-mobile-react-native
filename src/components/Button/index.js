import React from 'react';
import { Button } from 'react-native-paper';

const GenericButton = (props) => (
  <Button mode="contained">
    {props.title}
  </Button>
);

export default GenericButton;