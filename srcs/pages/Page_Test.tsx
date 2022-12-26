import React from 'react';
import {View} from 'react-native';
import CompHashtag from '../components/reviewList/Comp_Hashtag';
import SearchIcon from '../assets/images/Search.png';
import CompStarRate from '../components/common/Comp_StarRate';
import CompTreatment from '../components/reviewList/Comp_Treatment';
import tw from '../libs/Lib_Tw';
import CompCustomer from '../components/reviewList/Comp_Customer';
const TestPage = () => {
  return (
    <View>
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
    </View>
  );
};
export default TestPage;
