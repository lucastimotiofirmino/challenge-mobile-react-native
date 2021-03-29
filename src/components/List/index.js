import React, { useMemo, useRef } from 'react';
import { FlatList } from 'react-native';

import Card from '../Card';

const List = ({
  list,
  renderLoading,
  getMore,
  likedIds,
  likeUnlikeAction,
  goToDetails,
}) => {
  const ref = useRef();

  const renderItem = ({ item }) => {
    const isLiked = likedIds.filter((id) => item.id === id).length > 0;

    return (
      <Card
        item={item}
        isLiked={isLiked}
        likeUnlikeAction={likeUnlikeAction}
        goToDetails={goToDetails}
      />
    );
  };

  return useMemo(
    () => (
      <FlatList
        ref={ref}
        data={list}
        renderItem={renderItem}
        ListFooterComponent={renderLoading}
        style={{ flexGrow: 0 }}
        extraData={likedIds}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        onEndReached={list.length % 20 === 0 ? getMore : () => {}}
        onEndReachedThreshold={0}
      />
    ),
    [list, likedIds],
  );
};

export default List;
