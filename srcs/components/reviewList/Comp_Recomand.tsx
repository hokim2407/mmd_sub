import React from 'react';
import {View, StyleProp, ViewStyle} from 'react-native';
import tw from '../../libs/Lib_Tw';
import CompNotoText from '../common/Comp_NotoText';
import Comp_IconImage from '../common/Comp_IconImage';
import EmoGoodIcon from '../../assets/images/Emo_Good.png';
import EmoBadIcon from '../../assets/images/Emo_Bad.png';
import {color} from '../../configs/Conf_Style';
const CompRecomand = ({
  children,
  recommand,
  style,
}: {
  children: React.ReactNode;
  recommand?: boolean;
  style?: StyleProp<ViewStyle>;
}) => {
  return (
    <View style={[tw`flex-row-center w-[50%] p-3 `, style]}>
      <Comp_IconImage
        src={recommand ? EmoGoodIcon : EmoBadIcon}
        color={recommand ? color.p5 : color.g7}
        style={tw`width-18 height-18`}
      />
      <CompNotoText
        style={tw`pl-1 font-14 text-${recommand ? 'p5' : 'g7'} font-bold`}>
        {children}
      </CompNotoText>
    </View>
  );
};

export default CompRecomand;
