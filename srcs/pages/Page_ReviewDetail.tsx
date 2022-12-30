import React, {useEffect, useState, useCallback} from 'react';
import {View} from 'react-native';
import {FlatList, ScrollView} from 'react-native';
import tw from '../libs/Lib_Tw';
import CompHashList from '../components/review/Comp_HashList';
import CompStatCard from '../components/review/Comp_StatCard';

import {useAppSelector, useAppDispatch} from '../context/store';
import {GetReviewList} from '../apis/API_Reviews';
import CompReviewProfileCard from '../components/review/Comp_ReviewProfileCard';
import {updateReviewPage} from '../context/Slice_hospitals';
import CompReciptCard from '../components/review/Comp_ReciptCard';
import setHeader from '../libs/Lib_setHeader';
import CompIconImage from '../components/common/Comp_IconImage';
import Comp_ReviewCard from '../components/review/Comp_ReviewCard';
import Comp_Customer from '../components/review_comp/Comp_Customer';
import CompLikeButton from '../components/review_comp/Comp_LikeButton';
import Comp_StarCard from '../components/review/Comp_StarCard';
import CompNotoText from '../components/common/Comp_NotoText';
import Comp_SimpleButton from '../components/review_comp/Comp_SimpleButton';
import {
  decreaseCurReview,
  increaseCurReview,
  setCurReview,
} from '../context/Slice_current';

const PageReviewDetail = ({route, navigation}: NavProps) => {
  const dispatch = useAppDispatch();
  const current = useAppSelector(state => state.current);
  const hospital = useAppSelector(
    state => state.hospitals.hospitals[current.hospitalIdx],
  );
  const review = useAppSelector(
    state =>
      state.hospitals.hospitals[current.hospitalIdx].reviews[current.reviewIdx],
  );
  useEffect(() => {
    setHeader(navigation, hospital.name);
  }, [hospital.name, navigation]);

  return (
    <ScrollView
      style={tw`flex-1 bg-white`}
      contentContainerStyle={tw`grow p-6`}>
      {/* 프로필 시작 */}
      <View style={tw`flex-row-start bg-white`}>
        <CompIconImage
          style={[
            tw`rounded-full border border-g3 p-1`,
            {
              width: 40,
              height: 40,
            },
          ]}
          src={{uri: review.customer.profile_image}}
        />
        <Comp_Customer
          style={tw`ml-2`}
          customer={review.customer}
          registered_at={review.registered_at}
        />
      </View>
      {/* 프로필 끝 */}

      <View style={tw`bg-white h-0 w-[100%] border-t border-g3 my-3 `} />
      {/* 리뷰 시작 */}
      <View style={tw`bg-white py-0`}>
        <Comp_ReviewCard folable={false} review={review} />
      </View>
      {/* 리뷰 끝 */}

      {/* 별점 시작 */}
      <View style={tw`bg-white`}>
        <Comp_StarCard />
      </View>
      {/* 별점 끝 */}
      <CompNotoText style={tw`text-g7 font-12 underline pt-6 pb-4`}>
        <CompNotoText style={tw`font-bold underline-offset-1`}>
          {review.liked_cnt}
        </CompNotoText>
        명의 회원에게 도움이 되었어요!
      </CompNotoText>
      <CompLikeButton
        hospitalIdx={hospital.idx}
        reviewIdx={review.idx}
        mode="dark"
      />
      <View style={tw`bg-white h-0 w-[100%] border-t border-g3 mt-4 pb-2 `} />
      {/* 이전이후버튼 시작 */}
      <View style={tw`flex-row-between`}>
        {current.reviewIdx > 0 ? (
          <Comp_SimpleButton
            mode="big"
            onPress={() => {
              dispatch(decreaseCurReview());
            }}>
            이전 리뷰
          </Comp_SimpleButton>
        ) : (
          <View></View>
        )}
        {current.reviewIdx < hospital.reviews.length ? (
          <Comp_SimpleButton
            mode="big"
            onPress={() => {
              dispatch(increaseCurReview());
            }}>
            다음 리뷰
          </Comp_SimpleButton>
        ) : (
          <View></View>
        )}
      </View>
      {/* 이전이후버튼 끝 */}
    </ScrollView>
  );
};

export default React.memo(PageReviewDetail);
