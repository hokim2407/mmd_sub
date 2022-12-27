import React, {useState, useEffect} from 'react';
import {StyleProp, ViewStyle, LayoutAnimation} from 'react-native';
import CompNotoText from './Comp_NotoText';
import tw from '../../libs/Lib_Tw';

const CompFoldableText = ({
  text,
  textStyle = {},
  foldTextStyle = {},
}: {
  text: string;
  textStyle?: StyleProp<ViewStyle>;
  foldTextStyle?: StyleProp<ViewStyle>;
}) => {
  const [showAll, setShowAll] = useState(text.length <= 100);

  useEffect(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }, [showAll]);

  return (
    <CompNotoText style={[tw`items-center font-14 text-g7`, textStyle]}>
      {showAll ? text : text.slice(0, 100).replace(/\n/g, ' ') + '...'}
      {text.length > 100 && (
        <CompNotoText
          style={[tw`text-black font-semibold font-14`, foldTextStyle]}
          onPress={() => {
            setShowAll(!showAll);
          }}>
          {showAll ? ' 접기' : ' 더보기'}
        </CompNotoText>
      )}
    </CompNotoText>
  );
};

export default CompFoldableText;
