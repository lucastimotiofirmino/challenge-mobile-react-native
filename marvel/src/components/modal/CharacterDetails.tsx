import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

interface CharacterProps {
  name?: React.ReactNode;
  description?: React.ReactNode;
  thumbnailPath?: React.ReactNode;
  thumbnailExtension?: React.ReactNode;
  comics: Array<{
    id: number;
    title: string;
    thumbnail: {
      path: string;
      extension: string;
    };
  }>;
  onClose: () => void;
}

const CharacterDetails: React.FC<CharacterProps> = ({
  name,
  description,
  thumbnailPath,
  thumbnailExtension,
  comics,
  onClose,
}) => (
  <View>
    <TouchableOpacity onPress={onClose}>
      <Icon name="close" size={40} color="#fff" style={styles.closeIcon} />
    </TouchableOpacity>

    <Image
      style={styles.imageModal}
      source={{
        uri: `${thumbnailPath}.${thumbnailExtension}`,
      }}
    />

    <Text style={styles.title}>{name}</Text>

    <View style={styles.main}>
      <Text style={styles.description}>{description}</Text>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flexGrow}
      >
        {comics && comics.length > 0 && (
          <Text style={styles.sectionTitle}>COMICS</Text>
        )}
        {comics && comics.length > 0 ? (
          comics.map((comic) => (
            <View key={String(comic.id)}>
              <View style={styles.detailsSection}>
                <Image
                  style={styles.thumbnail}
                  source={{
                    uri: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
                  }}
                  resizeMode="contain"
                />
                <Text style={styles.comicTitle}>{comic.title}</Text>
              </View>
            </View>
          ))
        ) : (
          <View style={styles.noComics}>
            <Text style={styles.noComicsText}>NO COMICS</Text>
          </View>
        )}
      </ScrollView>
    </View>
  </View>
);

export default CharacterDetails;
