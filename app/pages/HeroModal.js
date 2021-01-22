import React, { memo } from 'react';

import { View, StyleSheet, Text, Image } from 'react-native';

import BaseModal from '../components/BaseModal';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  side: {
    maxWidth: 100,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 5,
    fontSize: 18,
  },
  descriptionBox: {
    width: 220,
    marginLeft: 20,
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#999',
    marginVertical: 10,
  },
});

const HeroModal = ({ route }) => {
  const { name, description, avatar, numEvents } = route.params;
  return (
    <BaseModal>
      <View style={styles.container}>
        <View style={styles.side}>
          <Image source={{ uri: avatar }} style={styles.avatar} />
          <Text style={styles.name}>{name}</Text>
        </View>
        <View style={styles.descriptionBox}>
          <Text>{description || 'Nenhuma descrição disponível.'}</Text>

          {numEvents > 0 && (
            <>
              <View style={styles.divider} />
              {numEvents > 0 && (
                <Text>
                  Aparece em
                  {numEvents == 1 ? ' um evento' : ` ${numEvents} eventos`}.
                </Text>
              )}
            </>
          )}
        </View>
      </View>
    </BaseModal>
  );
};

export default memo(HeroModal);
