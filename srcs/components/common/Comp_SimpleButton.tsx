import React from 'react';
import {TouchableHighlight} from 'react-native';
import tw from '../../libs/Lib_Tw';
import NotoText from './Comp_NotoText';
import {color} from '../../configs/Conf_Style';
const SimpleButton = ({
  children,
  mode = 'big',
  onPress,
}: {
  children: React.ReactNode;
  mode?: 'big' | 'small';
  onPress?: () => void;
}) => {
  const containerStyle =
    mode === 'big' ? 'border-g6 p-3 w-[49%]' : 'align-center border-g3 p-1';
  const textStyle = mode === 'big' ? ' font-14' : 'font-12';

  return (
    <TouchableHighlight
      underlayColor={color.g1}
      onPress={onPress}
      style={[
        tw`bg-white flex-row-center rounded border rounded ${containerStyle}`,
      ]}>
      <>
        <NotoText style={tw`px-1 text-g7 ${textStyle}`}>{children}</NotoText>
      </>
    </TouchableHighlight>
  );
};

export default React.memo(SimpleButton);
