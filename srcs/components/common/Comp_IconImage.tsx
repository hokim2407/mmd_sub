import React from 'react';
import {
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  ViewStyle,
  StyleProp,
  ImageStyle,
  ColorValue,
} from 'react-native';

const CompIconImage = ({
  src,
  color,
  style = {},
  imgStyle = {},
  onPress,
}: {
  src: ImageSourcePropType;
  color?: ColorValue;
  style?: StyleProp<ViewStyle>;
  imgStyle?: StyleProp<ImageStyle>;
  onPress?: () => void;
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[{width: 25, height: 25}, style]}
      activeOpacity={onPress ? 0.7 : 1}>
      <Image
        style={[
          {width: '100%', height: '100%', resizeMode: 'cover'},
          color ? {tintColor: color} : {},
          imgStyle,
        ]}
        source={src}
      />
    </TouchableOpacity>
  );
};

export default React.memo(CompIconImage);
