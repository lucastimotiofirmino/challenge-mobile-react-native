import React, { useEffect, useState } from 'react';
import { Text, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { getSeries } from '~/store/ducks/series';

import List from '../List';

import { Container, LoadingContainer } from './styles';

const SeriesList = () => {
  const { list, length } = useSelector((state) => state.series);

  const [more, setMore] = useState(1);
  const [gettingMoreSeries, setGettingMoreSeries] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (more !== 1 || length === 0) dispatch(getSeries());
  }, [more]);

  useEffect(() => {
    setGettingMoreSeries(false);
  }, [list]);

  const getMoreSeries = () => {
    setMore(more + 1);
    setGettingMoreSeries(true);
  };

  const goToSerie = () => {};

  const renderSeriePreview = ({ item, index }) => (
    <Container onPress={goToSerie}>
      <Text>{index}</Text>
    </Container>
  );

  const renderLoading = () =>
    gettingMoreSeries ? (
      <LoadingContainer>
        <ActivityIndicator size="small" color="white" />
      </LoadingContainer>
    ) : (
      <></>
    );

  return (
    <List
      list={list}
      renderItem={renderSeriePreview}
      renderLoading={renderLoading}
      getMore={getMoreSeries}
    />
  );
};

export default SeriesList;
