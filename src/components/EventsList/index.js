import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import {
  getEvents,
  getEventsByName,
  likeAEvent,
  unlikeAEvent,
} from '~/store/ducks/events';

import List from '../List';

import { LoadingContainer } from './styles';

const EventsList = () => {
  const { list, length, listByName, likedEventsIds } = useSelector(
    (state) => state.events,
  );
  const { nameForSearch } = useSelector((state) => state.app);

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

  const goToEvent = () => {};

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

  const eventList = listByName.length > 0 ? listByName : list;

  return (
    <List
      list={eventList}
      renderLoading={renderLoading}
      getMore={getMoreEvents}
      likeUnlikeAction={likeUnlikeThisEvent}
      goToDetails={goToEvent}
      likedIds={likedEventsIds}
    />
  );
};

export default EventsList;
