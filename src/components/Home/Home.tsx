import React from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {Header} from '../../assets/theme';
import Character from './Character/Character';
import {style} from './styles';

export interface Props {
  characters: Array<any>;
  loadMore: Function;
  isLoading?: Boolean;
}

const HomeComponent: React.FC<Props> = ({characters, loadMore, isLoading}) => {
  const renderItem = ({item}) => {
    const thumbnailPath = `${item?.thumbnail?.path}`.replace('http', 'https');
    const imageUrl = `${thumbnailPath}.${item?.thumbnail?.extension}`;
    return <Character item={item} imageUrl={imageUrl} />;
  };

  return (
    <View style={style.container}>
      <Header />
      <FlatList
        style={style.container}
        data={characters}
        renderItem={renderItem}
        onEndReached={() => {
          loadMore();
        }}
      />
      {isLoading ? (
        <View>
          <ActivityIndicator />
        </View>
      ) : null}
    </View>
  );
};

export default HomeComponent;
