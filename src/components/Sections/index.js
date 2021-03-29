import React from 'react';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { changeSection } from '~/store/ducks/app';

import sectionsList from '~/constants/sections';

import { Container, SectionLabel, FlatListContainer } from './styles';

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
    <FlatListContainer>
      <FlatList
        data={sectionsList}
        horizontal
        renderItem={renderASection}
        style={{ flexGrow: 0, marginBottom: 0 }}
        extraData={sectionsList}
        showsHorizontalScrollIndicator={false}
      />
    </FlatListContainer>
  );
};

export default Sections;
