import React from 'react';
import {View} from 'react-native';
import CompHashtag from '../components/reviewList/Comp_Hashtag';
import SearchIcon from '../assets/images/Search.png';

const TestPage = () => {
  return (
    <View>
      <CompHashtag choiced iconSrc={SearchIcon}>
        검색
      </CompHashtag>
      <CompHashtag>전체</CompHashtag>
    </View>
  );
};
export default TestPage;
