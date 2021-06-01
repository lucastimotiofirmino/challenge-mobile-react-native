import React from 'react';
import {Modal} from '../../../assets/theme';
import {Text, Image, View} from 'react-native';
import {Button} from '../../../assets/theme';
import {replaceHttpToHttps} from '../../../utils/imageUtils';
import {style} from './styles';

export interface Props {
  onClose: Function;
  visible: boolean;
  selectedCharacter: any;
  onFavorite: Function;
  favorites: Array<any>;
}

const CharacterModal: React.FC<Props> = ({
  visible = false,
  onClose,
  selectedCharacter,
  onFavorite,
  favorites = [],
}) => {
  const getImage = () => {
    const httpsPath = replaceHttpToHttps(selectedCharacter?.thumbnail?.path);
    const urlImage = `${httpsPath}.${selectedCharacter?.thumbnail?.extension}`;
    return urlImage;
  };

  const checkIsFavorite = () => {
    if (favorites && selectedCharacter) {
      const data = favorites.filter(f => f?.id === selectedCharacter?.id);
      return data.length ? true : false;
    }
    return false;
  };

  return (
    <Modal
      visible={visible}
      onClose={() => {
        onClose();
      }}>
      <View>
        <View style={style.infoContainer}>
          <Image source={{uri: getImage()}} style={style.image} />
          <Text style={style.text}>{selectedCharacter?.name}</Text>
          <Text style={style.descriptionText}>
            {selectedCharacter?.description}
          </Text>
        </View>

        <Button
          title={'Favoritar'}
          selected={checkIsFavorite()}
          onPress={() => {
            onFavorite(selectedCharacter);
          }}
        />
        <Button
          title={'Fechar'}
          onPress={() => {
            onClose();
          }}
        />
      </View>
    </Modal>
  );
};

export default CharacterModal;
