import React from 'react';
import {StyleProp, ViewStyle, TouchableHighlight} from 'react-native';
import tw from '../../libs/Lib_Tw';
import CompNotoText from '../common/Comp_NotoText';
import CompIconImage from '../common/Comp_IconImage';
import LikeEmptyIcon from '../../assets/images/Like_Empty.png';
import LikeFullIcon from '../../assets/images/Like_Full.png';
import {color} from '../../configs/Conf_Style';
const CompLikeButton = ({
  mode = 'light',
  count,
  like,
  onPress,
  boxStyle,
}: {
  mode?: 'light' | 'dark';
  count?: number;
  like?: boolean;
  onPress?: () => void;
  boxStyle?: StyleProp<ViewStyle>;
}) => {
  const containerStyle =
    mode === 'light'
      ? 'bg-white border-g3 aline-center py-2 px-3'
      : 'bg-g7 py-3 px-4';
  const iconStyle =
    mode === 'light' ? 'width-16 height-16' : 'width-18 height-18';
  const textStyle = mode === 'light' ? 'text-g7 font-13' : 'text-white font-14';

  const CompHeartIcon = (
    <CompIconImage
      src={like ? LikeFullIcon : LikeEmptyIcon}
      style={tw`${iconStyle} `}
      color={color.s5}
    />
  );

  return (
    <TouchableHighlight
      underlayColor={color.g1}
      onPress={onPress}
      style={[
        tw` flex-row-center rounded
      ${containerStyle}`,
        boxStyle,
      ]}>
      <>
        {!count && CompHeartIcon}
        <CompNotoText style={tw`px-1 font-bold ${textStyle}`}>
          도움됐어요
        </CompNotoText>
        {count && (
          <>
            {CompHeartIcon}
            <CompNotoText style={tw`px-1 font-bold ${textStyle}`}>
              {count}
            </CompNotoText>
          </>
        )}
      </>
    </TouchableHighlight>
  );
};

export default CompLikeButton;
