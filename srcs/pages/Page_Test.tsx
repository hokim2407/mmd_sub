import React from 'react';
import {View} from 'react-native';
import CompHashtag from '../components/reviewList/Comp_Hashtag';
import SearchIcon from '../assets/images/Search.png';
import CompStarRate from '../components/common/Comp_StarRate';

const TestPage = () => {
  return (
    <View>
      <CompHashtag choiced iconSrc={SearchIcon}>
        검색
      </CompHashtag>
      <CompHashtag>전체</CompHashtag>
      <CompStarRate rate={8.7} showRate />
    </View>
  );
};
export default TestPage;
