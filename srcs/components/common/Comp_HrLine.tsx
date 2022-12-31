import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import tw from '../../libs/Lib_Tw';

const HrLine = ({style}: {style: StyleProp<ViewStyle>}) => {
  return <View style={[tw`h-0 w-[100%] border-t border-g3 my-3 `, style]} />;
};

export default HrLine;
