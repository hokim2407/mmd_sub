import React from 'react';
import {Text, StyleProp, ViewStyle} from 'react-native';
import tw from '../../libs/Lib_Tw';

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
    <Text onPress={onPress} style={[tw`noto-300`, style]}>
      {children}
    </Text>
  );
};

export default CompNotoText;
