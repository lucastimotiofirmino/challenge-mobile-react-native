import React, { useMemo, useRef, useState } from 'react';
import { FlatList } from 'react-native';

import Card from '../Card';

import { Container, ToTopButton, ToTop } from './styles';

const List = ({
  list,
  renderLoading,
  getMore,
  likedItems,
  likeUnlikeAction,
  section,
}) => {
  const [showToTop, setShowToTop] = useState(false);

  const ref = useRef();

  const renderItem = ({ item }) => {
    const isLiked =
      likedItems.filter((likedItem) => item.id === likedItem.id).length > 0;

    return (
      <Card
        item={item}
        isLiked={isLiked}
        likeUnlikeAction={likeUnlikeAction}
        section={section}
      />
    );
  };

  const goToTop = () => {
    ref.current.scrollToIndex({ index: 0 });
  };

  const ShowToTop = (e) => {
    if (e.nativeEvent.contentOffset.y !== 0) {
      if (!showToTop) setShowToTop(true);
    } else setShowToTop(false);
  };

  return (
    <Container>
      {useMemo(
        () => (
          <FlatList
            ref={ref}
            data={list}
            renderItem={renderItem}
            ListFooterComponent={renderLoading}
            style={{ flexGrow: 0 }}
            extraData={likedItems}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            onEndReached={list.length % 20 === 0 ? getMore : () => {}}
            onEndReachedThreshold={0}
            onScroll={ShowToTop}
          />
        ),
        [list, likedItems],
      )}
      {showToTop && (
        <ToTopButton onPress={goToTop}>
          <ToTop />
        </ToTopButton>
      )}
    </Container>
  );
};

export default List;
