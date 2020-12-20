import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DetailModal from '../DetailModal';

import {HERO_ITEM} from '../../constants/strings';
import {useColors} from '../../themes';
import {useSizes, useWindowSizes} from '../../constants/sizes';
import {styles} from './style';

interface HeroItemsProps {
  title: string;
  description: string;
  thumbImage: string;
  onPressFavorite: Function;
}

const HeroItem: React.FC<HeroItemsProps> = (Props) => {
  const {title, description, thumbImage, onPressFavorite} = Props;
  const [showModal, setModal] = useState(false);
  const colors = useColors();
  const sizes = useSizes();
  const windowSizes = useWindowSizes();
  const style = styles(colors, windowSizes, sizes);
  const realDescription =
    description.length > 0 ? description : HERO_ITEM.description;
  return (
    <View style={style.container}>
      <View style={style.thumbContainer}>
        <Image
          style={style.thumbImage}
          resizeMode={'cover'}
          source={{
            uri: thumbImage,
          }}
        />
      </View>
      <View>
        <View style={style.titleContainer}>
          <Text style={style.titleText} numberOfLines={1}>
            {title}
          </Text>
          <View style={style.iconContainer}>
            <TouchableOpacity
              style={style.iconItem}
              onPress={() => setModal(true)}>
              <Icon
                name={'alert-circle-outline'}
                size={sizes.iconSizeSmall}
                color={colors.LABEL_1_COLOR}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={style.iconItem}
              onPress={() => onPressFavorite()}>
              <Icon
                name={'heart-outline'}
                size={sizes.iconSizeSmall}
                color={colors.LABEL_1_COLOR}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={style.descriptionContainer}>
          <Text style={style.descriptionText} numberOfLines={4}>
            {realDescription}
          </Text>
        </View>
      </View>
      <Modal
        isVisible={showModal}
        onSwipeComplete={() => setModal(false)}
        swipeDirection={'down'}>
        <DetailModal
          description={realDescription}
          thumbImage={thumbImage}
          title={title}
          onCloseModal={() => {
            setModal(false);
          }}
        />
      </Modal>
    </View>
  );
};

export default HeroItem;
