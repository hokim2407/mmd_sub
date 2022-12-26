import React from 'react';
import {View} from 'react-native';
import tw from '../../libs/Lib_Tw';
import CompNotoText from '../common/Comp_NotoText';
import Comp_IconImage from '../common/Comp_IconImage';
import EmoGoodIcon from '../../assets/images/Emo_Good.png';
import EmoBadIcon from '../../assets/images/Emo_Bad.png';
import {color} from '../../configs/Conf_Style';
const CompRecomand = ({
  children,
  recommand,
}: {
  children: React.ReactNode;
  recommand?: boolean;
}) => {
  return (
    <View style={tw`flex-row-start`}>
      <Comp_IconImage
        src={recommand ? EmoGoodIcon : EmoBadIcon}
        color={recommand ? color.p5 : color.g7}
        style={tw`width-18 height-18`}
      />
      <CompNotoText
        style={tw`font-14 text-${recommand ? 'p5' : 'g7'} font-bold`}>
        {children}
      </CompNotoText>
    </View>
  );
};

export default CompRecomand;
