import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import CompHashtag from '../components/review_comp/Comp_Hashtag';
import SearchIcon from '../assets/images/Search.png';
import CompStarRate from '../components/common/Comp_StarRate';
import CompTreatment from '../components/review_comp/Comp_Treatment';
import tw from '../libs/Lib_Tw';
import CompCustomer from '../components/review_comp/Comp_Customer';
import CompLikeButton from '../components/review_comp/Comp_LikeButton';
import CompSimpleButton from '../components/review_comp/Comp_SimpleButton';
import CompRecomandIcon from '../components/review_comp/Comp_RecomandIcon';
import CompReviewCard from '../components/review/Comp_ReviewCard';
import CompHashList from '../components/review/Comp_HashList';
import CompStatCard from '../components/review/Comp_StatCard';
import {GetHospitalList} from '../apis/API_Hospitals';
import {GetReviewDetail, GetReviewList} from '../apis/API_Reviews';

const TestPage = () => {
  const [hospital, setHospital] = useState<HospitalType>();
  const [review, setReview] = useState<ReviewType>();

  const getInfo = async () => {
    try {
      const hospitalList = await GetHospitalList();

      if (!hospitalList.success) return;

      setHospital(hospitalList.result.hospitals[0]);

      const reviewList = await GetReviewList(
        hospitalList.result.hospitals[0].id,
        1,
        20,
      );
      if (!reviewList.success) return;
      setReview(reviewList.result.reviews[0]);
      const reviewDetail = await GetReviewDetail(
        hospitalList.result.hospitals[0].id,
        reviewList.result.reviews[0].id,
      );
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getInfo();
  }, []);

  return (
    <View>
      {hospital && <CompStatCard hospital={hospital} />}
      {hospital && (
        <CompHashList hashList={hospital.treatment_prices_count_per_name} />
      )}
      {review && <CompReviewCard review={review} />}
      {review && (
        <View style={tw`p-2 bg-white`}>
          <CompCustomer
            nameStyle={tw`text-black`}
            customer={review.customer}
            registered_at={'2022-01-02'}
          />
        </View>
      )}
      <CompHashtag choiced iconSrc={SearchIcon}>
        검색
      </CompHashtag>
      <CompHashtag>전체</CompHashtag>
      <CompStarRate rate={8.7} showRate />
      <View style={tw`w-[80%]`}>
        <CompTreatment
          treatments={[
            {name: '치료', price: '23000'},
            {name: '치료', price: '23000'},
          ]}></CompTreatment>
      </View>
      <CompLikeButton mode="dark" />
      <CompSimpleButton mode="big">이전 리뷰 보기</CompSimpleButton>
      <CompSimpleButton mode="small">클린 시스템 보기</CompSimpleButton>
      <CompRecomandIcon>12</CompRecomandIcon>
      <CompRecomandIcon recommand>14</CompRecomandIcon>
    </View>
  );
};
export default TestPage;
