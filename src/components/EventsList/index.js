import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { EVENTS } from '~/constants/sections';

import {
  getEvents,
  getEventsByName,
  likeAEvent,
  unlikeAEvent,
} from '~/store/ducks/events';

import List from '../List';

import { LoadingContainer } from './styles';

const EventsList = () => {
  const { list, length, listByName } = useSelector((state) => state.events);
  const { nameForSearch } = useSelector((state) => state.app);
  const { likedEvents } = useSelector((state) => state.likes);

  const [more, setMore] = useState(1);
  const [gettingMoreEvents, setGettingMoreEvents] = useState(false);

  const dispatch = useDispatch();

  const getMoreEventsDecision = () => {
    if (nameForSearch === '') dispatch(getEvents());
    else dispatch(getEventsByName());
  };

  useEffect(() => {
    if (more !== 1 || length === 0) getMoreEventsDecision();
  }, [more]);

  useEffect(() => {
    setGettingMoreEvents(false);
  }, [list, listByName]);

  const getMoreEvents = () => {
    setMore(more + 1);
    setGettingMoreEvents(true);
  };

  const likeUnlikeThisEvent = (eventId, isLiked) => {
    if (isLiked) dispatch(unlikeAEvent(eventId));
    else dispatch(likeAEvent(eventId));
  };

  const renderLoading = () =>
    gettingMoreEvents ? (
      <LoadingContainer>
        <ActivityIndicator size="small" color="white" />
      </LoadingContainer>
    ) : (
      <></>
    );

  const eventsList = nameForSearch !== '' ? listByName : list;

  return (
    <List
      list={eventsList}
      renderLoading={renderLoading}
      getMore={getMoreEvents}
      likeUnlikeAction={likeUnlikeThisEvent}
      likedItems={likedEvents}
      section={EVENTS}
    />
  );
};

export default EventsList;
