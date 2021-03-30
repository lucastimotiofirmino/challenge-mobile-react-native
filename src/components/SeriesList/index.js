import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { SERIES } from '~/constants/sections';

import {
  getSeries,
  getSeriesByName,
  likeASerie,
  unlikeASerie,
} from '~/store/ducks/series';

import List from '../List';

import { LoadingContainer } from './styles';

const SeriesList = () => {
  const { list, length, listByName } = useSelector((state) => state.series);
  const { nameForSearch } = useSelector((state) => state.app);
  const { likedSeries } = useSelector((state) => state.likes);

  const [more, setMore] = useState(1);
  const [gettingMoreSeries, setGettingMoreSeries] = useState(false);

  const dispatch = useDispatch();

  const getMoreSeriesDecision = () => {
    if (nameForSearch === '') dispatch(getSeries());
    else dispatch(getSeriesByName());
  };

  useEffect(() => {
    if (more !== 1 || length === 0) getMoreSeriesDecision();
  }, [more]);

  useEffect(() => {
    setGettingMoreSeries(false);
  }, [list, listByName]);

  const getMoreSeries = () => {
    setMore(more + 1);
    setGettingMoreSeries(true);
  };

  const likeUnlikeThisSerie = (serieId, isLiked) => {
    if (isLiked) dispatch(unlikeASerie(serieId));
    else dispatch(likeASerie(serieId));
  };

  const renderLoading = () =>
    gettingMoreSeries ? (
      <LoadingContainer>
        <ActivityIndicator size="small" color="white" />
      </LoadingContainer>
    ) : (
      <></>
    );

  const seriesList = nameForSearch !== '' ? listByName : list;

  return (
    <List
      list={seriesList}
      renderLoading={renderLoading}
      getMore={getMoreSeries}
      likeUnlikeAction={likeUnlikeThisSerie}
      likedItems={likedSeries}
      section={SERIES}
    />
  );
};

export default SeriesList;
