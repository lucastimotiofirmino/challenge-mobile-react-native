import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Spacing, Colors, Typography } from '../../styles';

interface ButtonProps {
  children?: any;
  onPress(): void;
  active?: boolean;
  icon?: string;
  transparent?: boolean;
  iconSize?: number;
  iconColor?: string;
  buttonColor?: string;
}

export const Button: React.FC<ButtonProps> = ({
  active,
  onPress,
  children,
  icon,
  transparent,
  iconSize,
  iconColor,
  buttonColor,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={Colors.BUTTON_TOUCH_OPACITY}
      hitSlop={{ top: 10, bottom: 10, left: 5, right: 10 }}
      onPress={onPress}
      style={[
        styles.button,
        active ? styles.active : null,
        transparent ? styles.transparent : null,
        buttonColor ? { backgroundColor: buttonColor } : null,
      ]}>
      <Icon
        name={icon ? icon : active ? 'check' : 'plus'}
        size={iconSize || Typography.FONT_SIZE_26}
        color={iconColor || Colors.WHITE}
      />
      {children ? <Text style={styles.label}>{children}</Text> : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: Spacing.SCALE_30,
    flexDirection: 'row',
    backgroundColor: Colors.GRAY_DARKEST,
    borderRadius: Spacing.SCALE_6,
    paddingLeft: Spacing.SCALE_12,
    paddingRight: Spacing.SCALE_12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  transparent: {
    backgroundColor: Colors.TRANSPARENCY,
  },
  label: {
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    fontSize: Typography.FONT_SIZE_18,
    color: Colors.WHITE,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    textAlignVertical: 'center',
    paddingLeft: Spacing.SCALE_5,
  },
  active: {
    backgroundColor: Colors.GREEN,
  },
});
