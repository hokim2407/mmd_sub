import React, {useEffect} from 'react';
import {View} from 'react-native';
import CompHashtag from '../components/reviewList/Comp_Hashtag';
import SearchIcon from '../assets/images/Search.png';
import CompStarRate from '../components/common/Comp_StarRate';
import CompTreatment from '../components/reviewList/Comp_Treatment';
import tw from '../libs/Lib_Tw';
import CompCustomer from '../components/reviewList/Comp_Customer';
import CompLikeButton from '../components/reviewList/Comp_LikeButton';
import CompSimpleButton from '../components/reviewList/Comp_SimpleButton';
import CompIconText from '../components/common/Comp_IconText';
import CompRecomand from '../components/reviewList/Comp_Recomand';
import CompReviewCard from '../components/reviewList/Comp_ReviewCard';
import CompHashList from '../components/reviewList/Comp_HashList';
import {GetHospitalList} from '../apis/API_Hospitals';

const TestPage = () => {
  const review = {
    id: 3,
    customer: {
      id: 7,
      // 유저의 프로필 사진
      profile_image: 'A',
      // 유저의 닉네임
      nickname: '감비아구렁이',
      // 유저가 작성한 리뷰의 갯수
      review_cnt: 7,
      // 유저가 작성한 리뷰의 liked_cnt 값의 총합
      liked_cnt: 7,
    },
    hospital_id: 3,
    hospital_name: 'A',
    doctor_id: 3,
    doctor_name: '권효연',
    total_score: 3,
    // 청결함에 대한 점수
    score_service_clarity: 3,
    // 직원의 친절함에 대한 점수
    score_service_kindness: 3,
    // 의사의 친절함에 대한 점수
    score_treatment_explain: 3,
    // 진료의 효과에 대한 점수
    score_treatment_outcome: 3,
    // 리뷰 등록 시점
    registered_at: '2019.08.29',
    // 리뷰를 작성한 병원 방문 시점
    visited_at: '2년전 방문',
    treatment_prices: [
      {
        // 리뷰에 기재된 진료 항목
        name: '사랑니 발치',
        price: '20000',
      },
    ],
    // 리뷰 내용, 콘텐츠
    contents: `정말 가히 사랑니발치의 신이라고 칭하고 싶습니다.. 사실 거리가 좀 있었는데도 내원한 이유는 사랑니 발치가격을 100% 오픈해주셔서 믿음이 갔어요
과잉진료에 대한 부분이 일단 마음이 놓였고, 남아있는 사랑니가 2개 되는데 상태를 봐주시더니 굳이 뽑지 않고 나중에 문제가 되면 뽑아도 된다고 말해주셔서 더 믿음이 갔습니다! 어휴 마취가 제일 아프지 뽑히고 나서는 뽑힌줄도 몰랐어요ㅋㅋ`,
    // 해당 병원을 추천는지 여부. True면 재방문 의사가 있다고 간주합니다.
    suggest: true,
    // 리뷰에 '도움됐어요' 버튼을 누른 유저의 수
    liked_cnt: 3,
    // 해당 리뷰에 '도움됐어요' 버튼을 눌렀는지 여부
    already_liked: false,
  };

  const hashs = [
    {name: '사랑니 발치', count: 17},
    {name: '사랑니 발치', count: 17},
    {name: '사랑니 발치', count: 17},
    {name: '사랑니 발치', count: 17},
  ];

  useEffect(() => {
    // getInfo();
  });
  return (
    <View>
      <CompHashList hashList={hashs} />
      <CompReviewCard review={review} />
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
      <View style={tw`p-2`}>
        <CompCustomer
          nameStyle={tw`text-black`}
          customer={{
            id: 1,
            // 유저의 프로필 사진
            profile_image: '1',
            // 유저의 닉네임
            nickname: '감비아구렁이',
            // 유저가 작성한 리뷰의 갯수
            review_cnt: 2,
            // 유저가 작성한 리뷰의 liked_cnt 값의 총합
            liked_cnt: 1,
          }}
          registered_at={'2022-01-02'}
        />
      </View>
      <CompLikeButton />
      <CompLikeButton mode="dark" />
      <CompSimpleButton mode="big">이전 리뷰 보기</CompSimpleButton>
      <CompSimpleButton mode="small">클린 시스템 보기</CompSimpleButton>
      <CompRecomand>12</CompRecomand>
      <CompRecomand recommand>14</CompRecomand>
    </View>
  );
};
export default TestPage;
