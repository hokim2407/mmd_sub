import React from 'react';
import {View, ImageSourcePropType, StyleProp, ViewStyle} from 'react-native';
import CompIconImage from './Comp_IconImage';
import CompNotoText from './Comp_NotoText';
import tw from '../../libs/Lib_Tw';

const CompIconText = ({
  children,
  src,
  containerStyle,
}: {
  children: React.ReactNode;
  src: ImageSourcePropType;
  containerStyle?: StyleProp<ViewStyle>;
}) => {
  return (
    <View style={[tw`flex-row-start`, containerStyle]}>
      <CompIconImage src={src} style={tw`width-12 height-12`} />
      <CompNotoText style={tw`font-12 text-g6 mr-1`}>{children}</CompNotoText>
    </View>
  );
};

export default CompIconText;
