import React, {useState, useEffect} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DetailModal from '../DetailModal';

import {HERO_ITEM} from '../../constants/strings';
import {useColors} from '../../themes';
import {useSizes, useWindowSizes} from '../../constants/sizes';
import {styles} from './style';
import {Favorites} from '../../store/ducks/favorites/types';
import * as actions from '../../store/ducks/favorites/actions';
import {useDispatch} from 'react-redux';

interface HeroItemsProps {
  item: Favorites;
  title: string;
  description: string;
  thumbImage: string;
  isFavorite: boolean;
}

const HeroItem: React.FC<HeroItemsProps> = (Props) => {
  const {title, description, thumbImage, item, isFavorite} = Props;

  const [showModal, setModal] = useState(false);
  const [favorite, setFavorite] = useState(isFavorite);

  const colors = useColors();
  const sizes = useSizes();
  const windowSizes = useWindowSizes();
  const style = styles(colors, windowSizes, sizes);
  const realDescription =
    description.length > 0 ? description : HERO_ITEM.description;
  const dispatch = useDispatch();

  useEffect(() => {}, [favorite]);

  function addFavorite(item: Favorites) {
    dispatch(actions.addFavorite(item));
  }

  function removeFavorite(item: Favorites) {
    dispatch(actions.removeFavorites(item));
  }

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
              onPress={() => {
                setFavorite(!favorite);
                favorite ? removeFavorite(item) : addFavorite(item);
              }}>
              <Icon
                name={favorite ? 'heart' : 'heart-outline'}
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
