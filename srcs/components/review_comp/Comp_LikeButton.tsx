import React, {useState, useCallback} from 'react';
import {StyleProp, ViewStyle, TouchableOpacity} from 'react-native';
import tw from '../../libs/Lib_Tw';
import CompNotoText from '../common/Comp_NotoText';
import CompIconImage from '../common/Comp_IconImage';
import LikeEmptyIcon from '../../assets/images/Like_Empty.png';
import LikeFullIcon from '../../assets/images/Like_Full.png';
import {color} from '../../configs/Conf_Style';
import {useAppDispatch, useAppSelector} from '../../context/store';

import {updateLiked} from '../../context/Slice_hospitals';
const CompLikeButton = ({
  hospitalIdx,
  reviewIdx,
  mode = 'light',
  boxStyle,
}: {
  hospitalIdx: number;
  reviewIdx: number;
  mode?: 'light' | 'dark';
  boxStyle?: StyleProp<ViewStyle>;
}) => {
  const dispatch = useAppDispatch();
  const review = useAppSelector(
    state => state.hospitals.hospitals[hospitalIdx].reviews[reviewIdx],
  );
  const containerStyle =
    mode === 'light'
      ? 'bg-white border-g3 border aline-center py-2 px-3'
      : 'bg-g7 py-3 px-4';
  const iconStyle =
    mode === 'light' ? 'width-16 height-16' : 'width-18 height-18';
  const textStyle = mode === 'light' ? 'text-g7 font-13' : 'text-white font-14';

  const onPress = useCallback(() => {
    dispatch(updateLiked({hospitalIdx, reviewIdx}));
  }, []);

  const CompHeartIcon = (
    <CompIconImage
      onPress={onPress}
      src={review.already_liked ? LikeFullIcon : LikeEmptyIcon}
      style={tw`${iconStyle} `}
      color={color.s5}
    />
  );

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
      style={[
        tw` flex-row-center rounded
      ${containerStyle}`,
        boxStyle,
      ]}>
      <>
        {mode === 'dark' && CompHeartIcon}
        <CompNotoText style={tw`font-12 px-1 font-bold ${textStyle}`}>
          도움됐어요
        </CompNotoText>
        {mode === 'light' && (
          <>
            {CompHeartIcon}
            <CompNotoText style={tw`font-12 px-1 ${textStyle}`}>
              {review.liked_cnt}
            </CompNotoText>
          </>
        )}
      </>
    </TouchableOpacity>
  );
};

export default React.memo(CompLikeButton);
