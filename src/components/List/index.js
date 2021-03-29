import React, { useMemo, useRef } from 'react';
import { FlatList } from 'react-native';

const List = ({ list, renderItem, renderLoading, getMore }) => {
  const ref = useRef();

  return useMemo(
    () => (
      <FlatList
        ref={ref}
        data={list}
        renderItem={renderItem}
        ListFooterComponent={renderLoading}
        style={{ flexGrow: 0 }}
        extraData={list}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        onEndReached={getMore}
        onEndReachedThreshold={0}
      />
    ),
    [list],
  );
};

export default List;
