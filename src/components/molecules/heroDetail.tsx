import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { I18n } from '@aws-amplify/core';
import { Spacing } from '../../styles';
import {
  Button,
  Retangle,
  HeroName,
  HeroImage,
  Row,
  HeroDescription,
  CircularButton,
} from '../atoms';

interface HeroDetailProps {
  imageSource: string;
  favorite: boolean;
  name: string;
  uniqueId: string;
  description: string;
  favoriteOnpress(): void;
  onPress(): void;
  active?: boolean;
}

export const HeroDetail: React.FC<HeroDetailProps> = ({
  imageSource,
  favorite,
  name,
  uniqueId,
  description,
  onPress,
  favoriteOnpress,
}) => {
  return (
    <>
      <ScrollView style={styles.container}>
        <HeroImage
          source={imageSource}
          uniqueId={uniqueId}
          height={Spacing.SCALE_300}
        />
        <Retangle>
          <Row>
            <HeroName>{name}</HeroName>
            <Button active={favorite} onPress={favoriteOnpress}>
              {I18n.get('Favorite')}
            </Button>
          </Row>
          <HeroDescription>
            {description.length > 1
              ? description
              : I18n.get('[This hero has no description].')}
          </HeroDescription>
        </Retangle>
        <View style={{ height: Spacing.SCALE_40 }} />
      </ScrollView>
      <CircularButton onPress={onPress} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    width: '100%',
    borderRadius: Spacing.SCALE_6,
    padding: Spacing.SCALE_6,
    paddingBottom: Spacing.SCALE_100,
  },
});
