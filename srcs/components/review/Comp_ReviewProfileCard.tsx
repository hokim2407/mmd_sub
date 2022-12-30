import React from 'react';
import tw from '../../libs/Lib_Tw';
import {View} from 'react-native';
import CompReviewCard from './Comp_ReviewCard';
import Comp_IconImage from '../common/Comp_IconImage';
import CompCustomer from '../review_comp/Comp_Customer';
import CompLikeButton from '../review_comp/Comp_LikeButton';
const CompReviewProfileCard = ({
  review,
  hospital,
  onPress,
}: {
  review: ReviewType;
  hospital: HospitalType;
  onPress: () => void;
}) => {
  return (
    <View style={tw`bg-white p-6`}>
      <CompReviewCard onPress={onPress} review={review} />

      <View style={tw`bg-white h-0 w-[100%] border-t border-g3 mt-3 mb-6`} />

      {/* 프로필 시작 */}
      <View style={tw`flex-row-between bg-white`}>
        <Comp_IconImage
          style={{
            width: 15,
            height: 15,
            marginBottom: 20,
          }}
          src={{uri: review.customer.profile_image}}
        />
        <CompCustomer
          style={tw`w-[60%]`}
          customer={review.customer}
          registered_at={review.registered_at}
        />
        <CompLikeButton
          hospitalIdx={hospital.idx}
          reviewIdx={review.idx}
          mode={'light'}
          count={review.liked_cnt}
          like={review.already_liked}
        />
      </View>
      {/* 프로필 끝 */}
    </View>
  );
};

export default React.memo(CompReviewProfileCard);
