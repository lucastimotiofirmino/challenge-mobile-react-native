import React from 'react';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { changeSection } from '~/store/ducks/app';

import SectionsList from './SectionsList';

import { Container, SectionLabel } from './styles';

const Sections = () => {
  const { section } = useSelector((state) => state.app);

  const dispatch = useDispatch();

  const selectSection = (idSection) => dispatch(changeSection(idSection));

  const renderASection = ({ item }) => (
    <Container
      selected={item.id === section}
      onPress={() => selectSection(item.id)}>
      <SectionLabel selected={item.id === section}>{item.section}</SectionLabel>
    </Container>
  );

  return (
    <FlatList
      data={SectionsList}
      horizontal
      renderItem={renderASection}
      style={{ flexGrow: 0 }}
      extraData={SectionsList}
    />
  );
};

export default Sections;
