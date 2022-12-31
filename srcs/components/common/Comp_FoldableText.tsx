import React, {useState, useEffect} from 'react';
import {StyleProp, ViewStyle, LayoutAnimation, Keyboard} from 'react-native';
import NotoText from './Comp_NotoText';
import tw from '../../libs/Lib_Tw';
import {useAppSelector} from '../../context/Store';
import highlightText from '../../libs/Lib_Highlight';

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
  const current = useAppSelector(state => state.current);
  const [showAll, setShowAll] = useState(false);
  const [shortText, setShortText] = useState<JSX.Element>();
  const [fullText, setFullText] = useState<JSX.Element>();

  useEffect(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }, [showAll]);

  useEffect(() => {
    setShortText(
      highlightText(text.slice(0, 100).replace(/\n/g, ' '), current.keyword),
    );
    setFullText(highlightText(text, current.keyword));
  }, [current.keyword]);

  return (
    <NotoText style={[tw`items-center font-14 text-g7`, textStyle]}>
      {!foldable || showAll ? fullText : shortText}
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
