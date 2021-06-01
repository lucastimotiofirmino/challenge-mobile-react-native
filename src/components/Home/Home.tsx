import React, {useState} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {Header} from '../../assets/theme';
import Character from './Character/Character';
import {style} from './styles';
import CharacterModal from './CharacterModal/CharacterModal';
import {replaceHttpToHttps} from '../../utils/imageUtils';
import Filter from './Filter/Filter';
import {appEnum} from '../../utils/enum';

export interface Props {
  characters: Array<any>;
  selectedCharacter: any;
  loadMore: Function;
  isLoading?: Boolean;
  onSeletcCharacter: Function;
  onFavorite: Function;
  favorites: Array<any>;
  filterType: string;
  onChangeFilterType: Function;
}

const HomeComponent: React.FC<Props> = ({
  characters,
  selectedCharacter,
  loadMore,
  isLoading,
  onSeletcCharacter,
  onFavorite,
  favorites,
  filterType,
  onChangeFilterType,
}) => {
  const [showModal, setShowModal] = useState(false);

  const renderItem = ({item}) => {
    const thumbnailPath = replaceHttpToHttps(item?.thumbnail?.path);
    const imageUrl = `${thumbnailPath}.${item?.thumbnail?.extension}`;
    return (
      <Character
        item={item}
        imageUrl={imageUrl}
        onSeletcCharacter={() => {
          onSeletcCharacter(item);
          setShowModal(true);
        }}
      />
    );
  };

  return (
    <View style={style.container}>
      <Header />
      <Filter onChangeFilterType={onChangeFilterType} />
      <FlatList
        style={style.container}
        data={
          filterType === appEnum.FILTER_TYPE.TYPE_1 ? characters : favorites
        }
        renderItem={renderItem}
        onEndReached={() => {
          if (filterType === appEnum.FILTER_TYPE.TYPE_1) {
            loadMore();
          }
        }}
      />
      {isLoading ? (
        <View>
          <ActivityIndicator />
        </View>
      ) : null}
      <CharacterModal
        selectedCharacter={selectedCharacter}
        visible={showModal}
        onFavorite={onFavorite}
        favorites={favorites}
        onClose={() => {
          setShowModal(false);
        }}
      />
    </View>
  );
};

export default HomeComponent;
