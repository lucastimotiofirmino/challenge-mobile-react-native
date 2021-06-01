import React, {useState} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {Header} from '../../assets/theme';
import Character from './Character/Character';
import {style} from './styles';
import CharacterModal from './CharacterModal/CharacterModal';
import {replaceHttpToHttps} from '../../utils/imageUtils';

export interface Props {
  characters: Array<any>;
  selectedCharacter: any;
  loadMore: Function;
  isLoading?: Boolean;
  onSeletcCharacter: Function;
}

const HomeComponent: React.FC<Props> = ({
  characters,
  selectedCharacter,
  loadMore,
  isLoading,
  onSeletcCharacter,
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
      <CharacterModal
        selectedCharacter={selectedCharacter}
        visible={showModal}
        onClose={() => {
          setShowModal(false);
        }}
      />
    </View>
  );
};

export default HomeComponent;
