import React from 'react';
import {ImageSourcePropType, TouchableHighlight} from 'react-native';
import tw from '../../libs/Lib_Tw';
import CompIconImage from '../common/Comp_IconImage';
import CompNotoText from '../common/Comp_NotoText';
import {color} from '../../configs/Conf_Style';

const CompHashtag = ({
  children,
  iconSrc,
  choiced = false,
  mode = 'hash',
  onPress,
}: {
  children?: React.ReactNode;
  iconSrc?: ImageSourcePropType;
  choiced?: Boolean;
  mode?: 'hash' | 'auth';
  onPress?: () => void;
}) => {
  let containerStyle = choiced ? 'border-p5 bg-p2' : 'border-g4 bg-white';
  let textColor = choiced ? color.p5 : color.g6;
  if (mode === 'auth') {
    containerStyle = 'px-[5] py-[2] border-p5 bg-p5';
    textColor = '#ffffff';
  }
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={choiced ? color.p2 : color.p2}
      style={tw`px-3 py-2 flex-row-center rounded-full border aline-center ${containerStyle}`}>
      <>
        {iconSrc && (
          <CompIconImage
            src={iconSrc}
            style={tw`width-14 height-14`}
            color={textColor}
          />
        )}
        <CompNotoText style={tw`text-[${textColor}] font-normal font-12 ml-1`}>
          {children}
        </CompNotoText>
      </>
    </TouchableHighlight>
  );
};

export default CompHashtag;
