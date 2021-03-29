import React, { useMemo, useRef } from 'react';
import { FlatList } from 'react-native';

const List = ({ list, renderItem, renderLoading, getMore, extraData }) => {
  const ref = useRef();

  return useMemo(
    () => (
      <FlatList
        ref={ref}
        data={list}
        renderItem={renderItem}
        ListFooterComponent={renderLoading}
        style={{ flexGrow: 0 }}
        extraData={extraData}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        onEndReached={list.length % 20 === 0 ? getMore : () => {}}
        onEndReachedThreshold={0}
      />
    ),
    [list, extraData],
  );
};

export default List;
