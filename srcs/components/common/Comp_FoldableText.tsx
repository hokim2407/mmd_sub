import React, {useState, useEffect} from 'react';
import {StyleProp, ViewStyle, LayoutAnimation} from 'react-native';
import NotoText from './Comp_NotoText';
import tw from '../../libs/Lib_Tw';

const FoldableText = ({
  text,
  textStyle = {},
  foldTextStyle = {},
  foldable = true,
}: {
  text: string;
  textStyle?: StyleProp<ViewStyle>;
  foldTextStyle?: StyleProp<ViewStyle>;
  foldable?: boolean;
}) => {
  const [showAll, setShowAll] = useState(text.length <= 100);

  useEffect(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }, [showAll]);

  return (
    <NotoText style={[tw`items-center font-14 text-g7`, textStyle]}>
      {!foldable || showAll ? text : text.slice(0, 100).replace(/\n/g, ' ')}
      {foldable && text.length > 100 && (
        <NotoText
          style={[tw`text-black font-semibold font-14`, foldTextStyle]}
          onPress={() => {
            setShowAll(!showAll);
          }}>
          {showAll ? ' 접기' : ' ...더보기'}
        </NotoText>
      )}
    </NotoText>
  );
};

export default React.memo(FoldableText);
