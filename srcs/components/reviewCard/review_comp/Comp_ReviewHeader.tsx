import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import tw from '../../../libs/Lib_Tw';
import NotoText from '../../common/Comp_NotoText';
import StarRate from '../../common/Comp_StarRate';
import Check from '../../../assets/images/Check.png';
import {color} from '../../../configs/Conf_Style';
import Hashtag from '../../hashCard/Comp_Hashtag';
import SepText from '../../common/Comp_SepText';
import {useReviewContext} from '../Context_Review';
const ReviewHeader = () => {
  const {review, redirectDetail} = useReviewContext();

  return (
    <TouchableOpacity
      style={tw`flex bg-white`}
      onPress={redirectDetail}
      activeOpacity={0.5}>
      <View style={tw`flex-row`}>
        <Hashtag mode="auth" iconSrc={Check}>
          영수증 인증
        </Hashtag>
      </View>
      <View style={tw`my-4`}>
        <NotoText style={tw`text-black font-bold text-base font-16`}>
          받은 진료 : {review.treatment_prices[0].name}
        </NotoText>
        <View style={tw`flex-row items-center`}>
          <StarRate rate={review.total_score} showRate />
          {review?.suggest === true && (
            <SepText textColor={color.p4}>재방문 의사 있음</SepText>
          )}
          {review?.visited_at !== undefined && (
            <SepText textColor={color.g4}>{review?.visited_at}</SepText>
          )}
        </View>
        <NotoText style={tw`text-[${color.g6}] font-13`}>
          의사:{review.doctor_name}
        </NotoText>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(ReviewHeader);
