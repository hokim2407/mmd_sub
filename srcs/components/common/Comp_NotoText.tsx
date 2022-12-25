import React from 'react';
import {Text, StyleProp, ViewStyle, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  notoFont: {
    fontFamily: 'NotoSansKR-Regular',
    includeFontPadding: false,
  },
});

const CompNotoText = ({
  children,
  style = {},
  onPress,
}: {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}) => {
  return (
    <Text onPress={onPress} style={[styles.notoFont, style]}>
      {children}
    </Text>
  );
};

export default CompNotoText;
