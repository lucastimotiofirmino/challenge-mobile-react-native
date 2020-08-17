import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

interface CharacterProps {
  name?: React.ReactNode;
  isFavorite?: React.ReactNode;
  description?: React.ReactNode;
  thumbnailPath?: React.ReactNode;
  thumbnailExtension?: React.ReactNode;

  onPressStar: () => void;
  onPressDetails: () => void;
}

const CharacterCard: React.FC<CharacterProps> = ({
  name,
  isFavorite,
  description,
  thumbnailPath,
  thumbnailExtension,
  onPressDetails,
  onPressStar,
}) => (
  <View style={styles.container}>
    <View style={styles.imageContainer}>
      <Image
        style={styles.image}
        source={{
          uri: `${thumbnailPath}.${thumbnailExtension}`,
        }}
      />
    </View>
    <View style={styles.descriptionContainer}>
      <Text style={styles.title} numberOfLines={2}>
        {name}
      </Text>
      <Text style={styles.description} numberOfLines={2}>
        {description}
      </Text>

      <View style={styles.detailsContainer}>
        <TouchableOpacity style={styles.detailsButton} onPress={onPressDetails}>
          <Text style={styles.detailsText}>Details</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onPressStar}>
          <Icon
            name={isFavorite ? 'star' : 'star-o'}
            size={26}
            color="#f78f3f"
          />
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

export default CharacterCard;
