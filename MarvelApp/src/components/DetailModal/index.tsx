import React from 'react';
import {Text, TouchableOpacity, View, ScrollView, Image} from 'react-native';
import {useColors} from '../../themes';
import {useWindowSizes, useSizes} from '../../constants/sizes';
import {styles} from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface DetailModalProps {
  title: string;
  thumbImage: string;
  description: string;
  onCloseModal: Function;
}

const DetailModal: React.FC<DetailModalProps> = (Props) => {
  const {onCloseModal, title, thumbImage, description} = Props;
  const colors = useColors();
  const sizes = useSizes();
  const windowSizes = useWindowSizes();
  const style = styles(colors, windowSizes, sizes);

  return (
    <View style={style.modalContainer}>
      <View style={style.titleContainer}>
        <Text style={style.labelTitle}>{title}</Text>
        <TouchableOpacity
          onPress={() => onCloseModal()}
          style={style.closeButtonContainer}>
          <Icon
            name={'close'}
            color={colors.LABEL_1_COLOR}
            size={sizes.iconSizeMedium}
          />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <Image style={style.thumbContainer} source={{uri: thumbImage}} />
        <Text style={style.labelDescription}>{description}</Text>
      </ScrollView>
    </View>
  );
};

export default DetailModal;
