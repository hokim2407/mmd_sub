import React, {useCallback} from 'react';
import {StyleProp, ViewStyle, TouchableOpacity, View} from 'react-native';
import tw from '../../../libs/Lib_Tw';
import NotoText from '../../common/Comp_NotoText';
import LikeEmptyIcon from '../../../assets/images/Like_Empty.png';
import LikeFullIcon from '../../../assets/images/Like_Full.png';
import {color} from '../../../configs/Conf_Style';
import {useReviewContext} from '../Context_Review';
import IconText from '../../common/Comp_IconText';
import {useAppSelector} from '../../../context/Store';

const LikeButton = ({
  mode = 'light',
  showDetail = false,
  boxStyle,
}: {
  mode?: 'light' | 'dark';
  showDetail?: boolean;
  boxStyle?: StyleProp<ViewStyle>;
}) => {
  const {review, updateLike} = useReviewContext();
  const current = useAppSelector(state => state.current);
  const containerStyle =
    mode === 'light'
      ? 'bg-white border-g3 border align-center py-2 px-3'
      : 'bg-g7 py-3 px-4';
  const iconStyle =
    mode === 'light' ? 'width-16 height-16' : 'width-18 height-18';
  const textStyle = mode === 'light' ? 'text-g7 font-13' : 'text-white font-14';

  const onPress = useCallback(() => {
    updateLike(mode === 'light' ? undefined : current.reviewIdx);
  }, [current.reviewIdx]);

  const CompHeartIcon = () => (
    <IconText
      imageSrc={review.already_liked ? LikeFullIcon : LikeEmptyIcon}
      textStyle={tw`font-12 px-1 ${textStyle}`}
      imageStyle={tw`${iconStyle} `}
      imageColor={color.s5}>
      {mode === 'dark' ? '' : review.liked_cnt}
    </IconText>
  );

  return (
    <>
      {showDetail && (
        <NotoText style={tw`text-g7 font-12 underline pt-6 pb-4`}>
          {review.liked_cnt === 0 ? (
            '리뷰가 도움이 되셨나요?'
          ) : (
            <>
              {' '}
              <NotoText style={tw`font-bold`}>{review.liked_cnt}</NotoText>
              명의 회원에게 도움이 되었어요!
            </>
          )}
        </NotoText>
      )}
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={onPress}
        style={[
          tw` flex-row-center rounded
      ${containerStyle}`,
          boxStyle,
        ]}>
        <View
          style={tw`flex-row-${
            mode === 'dark' ? 'start' : 'end'
          } align-center`}>
          <NotoText style={tw`font-12 px-1 font-bold ${textStyle}`}>
            도움됐어요
          </NotoText>
          <CompHeartIcon />
        </View>
      </TouchableOpacity>
    </>
  );
};

export default React.memo(LikeButton);
