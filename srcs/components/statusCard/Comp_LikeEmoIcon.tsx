import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import tw from '../../libs/Lib_Tw';
import EmoGoodIcon from '../../assets/images/Emo_Good.png';
import EmoBadIcon from '../../assets/images/Emo_Bad.png';
import {color} from '../../configs/Conf_Style';
import IconText from '../common/Comp_IconText';
const LikeEmoIcon = ({
  children,
  recommand,
  style,
}: {
  children: React.ReactNode;
  recommand?: boolean;
  style?: StyleProp<ViewStyle>;
}) => {
  return (
    <IconText
      containerStyle={[tw`flex-row-center w-[50%] p-3 `, style]}
      imageSrc={recommand ? EmoGoodIcon : EmoBadIcon}
      imageColor={recommand ? color.p5 : color.g7}
      imageStyle={tw`width-18 height-18`}
      textStyle={tw`pl-1 font-14 text-${recommand ? 'p5' : 'g7'} font-bold`}>
      {children}
    </IconText>
  );
};

export default React.memo(LikeEmoIcon);
