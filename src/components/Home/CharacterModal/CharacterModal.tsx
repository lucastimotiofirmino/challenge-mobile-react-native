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
}

const CharacterModal: React.FC<Props> = ({
  visible = false,
  onClose,
  selectedCharacter,
}) => {
  const getImage = () => {
    const httpsPath = replaceHttpToHttps(selectedCharacter?.thumbnail?.path);
    const urlImage = `${httpsPath}.${selectedCharacter?.thumbnail?.extension}`;
    return urlImage;
  };

  return (
    <Modal
      visible={visible}
      onClose={() => {
        onClose();
      }}>
      <View>
        <>
          <Image source={{uri: getImage()}} style={style.image} />
          <Text style={style.text}>{selectedCharacter?.name}</Text>
        </>

        <Button
          title={'Favoritar'}
          onPress={() => {
            // onClose();
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
