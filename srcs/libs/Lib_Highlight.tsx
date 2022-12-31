import React from 'react';
import NotoText from '../components/common/Comp_NotoText';
import tw from './Lib_Tw';
import {StyleProp, ViewStyle} from 'react-native';

const highlightText = (
  str: string,
  keyword: string,
  textStyle?: StyleProp<ViewStyle>,
) => {
  if (keyword === '') {
    return <NotoText>{str}</NotoText>;
  }
  const tokens = str.split(keyword);
  return (
    <>
      {tokens.map((token, idx) => (
        <NotoText key={idx} style={textStyle}>
          {token}
          {idx < tokens.length - 1 && (
            <NotoText style={[tw`bg-s4-30`, textStyle]}>{keyword} </NotoText>
          )}
        </NotoText>
      ))}
    </>
  );
};
export default highlightText;
