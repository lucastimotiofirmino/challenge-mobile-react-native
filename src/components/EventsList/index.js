import React, { useEffect, useState } from 'react';
import { Text, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { getEvents } from '~/store/ducks/events';

import List from '../List';

import { Container, LoadingContainer } from './styles';

const EventsList = () => {
  const { list, length } = useSelector((state) => state.events);

  const [more, setMore] = useState(1);
  const [gettingMoreEvents, setGettingMoreEvents] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (more !== 1 || length === 0) dispatch(getEvents());
  }, [more]);

  useEffect(() => {
    setGettingMoreEvents(false);
  }, [list]);

  const getMoreEvents = () => {
    setMore(more + 1);
    setGettingMoreEvents(true);
  };

  const goToEvent = () => {};

  const renderEventPreview = ({ item, index }) => (
    <Container onPress={goToEvent}>
      <Text>{index}</Text>
    </Container>
  );

  const renderLoading = () =>
    gettingMoreEvents ? (
      <LoadingContainer>
        <ActivityIndicator size="small" color="white" />
      </LoadingContainer>
    ) : (
      <></>
    );

  return (
    <List
      list={list}
      renderItem={renderEventPreview}
      renderLoading={renderLoading}
      getMore={getMoreEvents}
    />
  );
};

export default EventsList;
