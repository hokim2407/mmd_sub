import React, {useState, useCallback} from 'react';
import {StyleProp, ViewStyle, TouchableHighlight} from 'react-native';
import tw from '../../libs/Lib_Tw';
import CompNotoText from '../common/Comp_NotoText';
import CompIconImage from '../common/Comp_IconImage';
import LikeEmptyIcon from '../../assets/images/Like_Empty.png';
import LikeFullIcon from '../../assets/images/Like_Full.png';
import {color} from '../../configs/Conf_Style';
import {useAppDispatch} from '../../context/store';

import {updateLiked} from '../../context/Slice_hospitals';
const CompLikeButton = ({
  hospitalIdx,
  reviewIdx,
  mode = 'light',
  count,
  like,
  boxStyle,
}: {
  hospitalIdx: number;
  reviewIdx: number;
  mode?: 'light' | 'dark';
  count?: number;
  like?: boolean;
  boxStyle?: StyleProp<ViewStyle>;
}) => {
  const dispatch = useAppDispatch();
  const [likeInfo, setLikeInfo] = useState({like, count});
  const containerStyle =
    mode === 'light'
      ? 'bg-white border-g3 border aline-center py-2 px-3'
      : 'bg-g7 py-3 px-4';
  const iconStyle =
    mode === 'light' ? 'width-16 height-16' : 'width-18 height-18';
  const textStyle = mode === 'light' ? 'text-g7 font-13' : 'text-white font-14';

  const updateInfo = useCallback(async () => {
    await dispatch(updateLiked({hospitalIdx, reviewIdx}));
  }, [dispatch, hospitalIdx, reviewIdx]);

  const onPress = useCallback(() => {
    updateInfo();
    setLikeInfo(prev => {
      prev.like = !prev.like;
      if (prev.count) {
        prev.count = prev.count + (prev.like ? -1 : 1);
      }
      return prev;
    });
  }, []);

  const CompHeartIcon = (
    <CompIconImage
      onPress={onPress}
      src={likeInfo.like ? LikeFullIcon : LikeEmptyIcon}
      style={tw`${iconStyle} `}
      color={color.s5}
    />
  );

  return (
    <TouchableHighlight
      underlayColor={color.g1}
      onPress={onPress}
      style={[
        tw` flex-row-center rounded
      ${containerStyle}`,
        boxStyle,
      ]}>
      <>
        {likeInfo.count === undefined && CompHeartIcon}
        <CompNotoText style={tw`font-12 px-1 font-bold ${textStyle}`}>
          도움됐어요
        </CompNotoText>
        {likeInfo.count !== undefined && (
          <>
            {CompHeartIcon}
            <CompNotoText style={tw`font-12 px-1 ${textStyle}`}>
              {count}
            </CompNotoText>
          </>
        )}
      </>
    </TouchableHighlight>
  );
};

export default React.memo(CompLikeButton);
