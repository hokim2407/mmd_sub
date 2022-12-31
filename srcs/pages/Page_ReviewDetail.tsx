import React, {useEffect} from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native';
import tw from '../libs/Lib_Tw';

import {useAppSelector, useAppDispatch} from '../context/Store';
import SetHeaderOpt from '../libs/Lib_SetHeaderOpt';
import LikeButton from '../components/reviewCard/review_comp/Comp_LikeButton';
import Comp_StarCard from '../components/statusCard/Comp_StarCard';
import Comp_SimpleButton from '../components/common/Comp_SimpleButton';
import {decreaseCurReview, increaseCurReview} from '../context/Slice_Current';
import ReviewProfileCard from '../components/reviewCard/Comp_ReviewProfileCard';
import ReviewContentCard from '../components/reviewCard/Comp_ReviewContentCard';
import {ReviewProvider} from '../components/reviewCard/Context_Review';
import HrLine from '../components/common/Comp_HrLine';
import {ReadReviews} from '../libs/Lib_ReadReviews';

const PageReviewDetail = ({navigation}: NavProps) => {
  const dispatch = useAppDispatch();
  const current = useAppSelector(state => state.current);
  const hospital = useAppSelector(
    state => state.hospitals.hospitals[current.hospitalIdx],
  );
  const reviews = useAppSelector(
    state => state.reviews[current.hospitalIdx].reviews,
  );
  const pages = useAppSelector(
    state => state.reviews[current.hospitalIdx].pages[current.keyword],
  );
  useEffect(() => {
    SetHeaderOpt(navigation, hospital.name);
  }, []);

  useEffect(() => {
    if (current.reviewIdx === pages.reviewIds.length - 2 && !pages.page_end)
      ReadReviews(dispatch, hospital, pages.page + 1, current.keyword);
  }, [current.reviewIdx]);

  return (
    <ScrollView
      style={tw`flex-1 bg-white`}
      contentContainerStyle={tw`grow p-6`}>
      {reviews[pages.reviewIds[current.reviewIdx]] && (
        <ReviewProvider
          reviewIdx={current.reviewIdx}
          review={reviews[pages.reviewIds[current.reviewIdx]]}
          navigation={navigation}>
          {/* 프로필 시작 */}
          <ReviewProfileCard showButton={false} />
          {/* 프로필 끝 */}

          <HrLine style={tw`bg-white my-3`} />

          {/* 리뷰 시작 */}
          <View style={tw`bg-white py-3`}>
            <ReviewContentCard foldable={false} />
          </View>
          {/* 리뷰 끝 */}

          {/* 별점 시작 */}
          <View style={tw`bg-white`}>
            <Comp_StarCard />
          </View>
          {/* 별점 끝 */}
          {/* 좋아요 버튼 시작 */}
          <LikeButton mode="dark" showDetail={true} />
          {/* 좋아요 버튼 시작 */}
        </ReviewProvider>
      )}
      <HrLine style={tw`bg-white mt-4 pb-2 `} />

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
          <View />
        )}
        {current.reviewIdx < pages.reviewIds.length - 1 ? (
          <Comp_SimpleButton
            mode="big"
            onPress={() => {
              dispatch(increaseCurReview());
            }}>
            다음 리뷰
          </Comp_SimpleButton>
        ) : (
          <View />
        )}
      </View>
      {/* 이전이후버튼 끝 */}
    </ScrollView>
  );
};

export default React.memo(PageReviewDetail);
