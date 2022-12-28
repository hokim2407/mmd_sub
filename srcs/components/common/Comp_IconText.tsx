import React from 'react';
import {
  View,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
  ImageStyle,
  ColorValue,
} from 'react-native';
import CompIconImage from './Comp_IconImage';
import CompNotoText from './Comp_NotoText';
import tw from '../../libs/Lib_Tw';

const CompIconText = ({
  children,
  imageSrc,
  imageColor,
  containerStyle,
  textStyle,
  imageStyle,
}: {
  children: React.ReactNode;
  imageSrc: ImageSourcePropType;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
  imageColor?: ColorValue;
}) => {
  return (
    <View style={[tw`flex-row-start`, containerStyle]}>
      <CompIconImage
        color={imageColor}
        src={imageSrc}
        style={[tw`width-12 height-12`, imageStyle]}
      />
      <CompNotoText style={[tw`font-12 text-g6 mr-1`, textStyle]}>
        {children}
      </CompNotoText>
    </View>
  );
};

export default CompIconText;
