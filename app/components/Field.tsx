import React, { memo } from 'react';

import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ViewStyle,
  TextStyle,
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

type Style = {
  field: ViewStyle;
  fieldIcon: ViewStyle;
  fieldText: TextStyle;
};

const styles = StyleSheet.create<Style>({
  field: {
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginRight: 5,
  },
  fieldIcon: {
    color: '#fff',
    fontSize: 18,
    marginRight: 10,
  },
  fieldText: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 13,
    textAlign: 'center',
  },
});

type FieldProps = {
  icon: string;
  text: string;
  backgroundColor?: string;
  onPress?: Function | null;
};

const Field: React.FC<FieldProps> = ({
  icon,
  text,
  onPress = null,
  backgroundColor = '#F67571',
}) => {
  const content = (
    <View style={[styles.field, { backgroundColor }]} testID="fieldbutton">
      <Icon name={icon} style={styles.fieldIcon} />
      <Text style={styles.fieldText} numberOfLines={1}>
        {text}
      </Text>
    </View>
  );

  if (onPress !== null) {
    return (
      <TouchableOpacity onPress={() => onPress()}>{content}</TouchableOpacity>
    );
  }

  return content;
};

export default memo(Field);
