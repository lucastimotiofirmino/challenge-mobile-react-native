import React from 'react';
import { StyleSheet } from 'react-native';
import { Spacing, Colors } from '../../styles';
import { Input, CustomIcon, Row, Button, BrandIcon } from '../atoms';

interface SearchBoxProps {
  value: string;
  placeholder: string;
  onChangeText: any;
  onPress: any;
  showCloseButton: boolean;
}

export const SearchBox: React.FC<SearchBoxProps> = ({
  value,
  placeholder,
  onChangeText,
  onPress,
  showCloseButton,
}) => {
  return (
    <Row style={styles.container}>
      <BrandIcon style={styles.brand} />
      <Row style={styles.searchArea}>
        <CustomIcon name="magnify" size={Spacing.SCALE_16} />
        <Input
          value={value}
          placeholder={placeholder}
          onChangeText={onChangeText}
        />
        {showCloseButton && (
          <Button
            onPress={() => onPress()}
            icon="close"
            iconSize={Spacing.SCALE_20}
            iconColor={Colors.WHITE}
            //buttonColor={Colors.PRIMARY}
            transparent
          />
        )}
      </Row>
    </Row>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Spacing.SCALE_10,
    marginBottom: Spacing.SCALE_30,
    justifyContent: 'center',
  },
  searchArea: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingLeft: Spacing.SCALE_8,
    borderRadius: 20,
  },
  brand: {
    marginLeft: Spacing.SCALE_10,
    marginRight: Spacing.SCALE_10,
  },
});
