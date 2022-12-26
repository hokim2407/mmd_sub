import React from 'react';
import {View} from 'react-native';
import CompHashtag from '../components/reviewList/Comp_Hashtag';
import SearchIcon from '../assets/images/Search.png';
import CompStarRate from '../components/common/Comp_StarRate';
import CompTreatment from '../components/reviewList/Comp_Treatment';
import tw from '../libs/Lib_Tw';
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
    </View>
  );
};
export default TestPage;
