import React from 'react';
import {View} from 'react-native';
import NotoText from './Comp_NotoText';
import tw from '../../libs/Lib_Tw';

const SepText = ({
  children,
  textColor,
  position = 'start',
}: {
  children: React.ReactNode;
  textColor: string;
  position?: 'start' | 'end';
}) => {
  return (
    <View style={tw`flex-row-${position} align-center`}>
      <View style={tw`w-0 mx-2 h-[4] border-l border-g3`} />
      <NotoText style={tw`text-[${textColor}] font-13`}>{children}</NotoText>
    </View>
  );
};

export default SepText;
