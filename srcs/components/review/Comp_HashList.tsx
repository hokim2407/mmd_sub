import React, {useState, useEffect} from 'react';
import {View, ScrollView, LayoutAnimation} from 'react-native';
import tw from '../../libs/Lib_Tw';
import SearchIcon from '../../assets/images/Search.png';
import CompHashtag from '../review_comp/Comp_Hashtag';
import CompSearchBar from '../review_comp/Comp_SearchBar';

const CompHashList = ({hashList}: {hashList: TreatmentPerNameType[]}) => {
  const hashs: HashType[] = [
    {id: 'all', name: '전체'},
    {id: 'search', name: '검색', icon: SearchIcon},
  ].concat();
  hashList.map((hash, idx) => {
    hashs.push({id: idx, ...hash});
  });
  const [curHash, setCurHash] = useState(hashs[0].id);

  useEffect(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }, [curHash]);

  return (
    <View style={tw`shadow`}>
      <View style={tw`py-3 bg-white`}>
        <ScrollView
          contentContainerStyle={tw`grow`}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {hashs.map((hash, idx) => {
            //해시태그
            return (
              <View
                key={hash.id}
                style={tw`mx-1 ${idx === 0 ? 'ml-4' : ''} 
                ${idx === hashs.length - 1 ? 'mr-4' : ''}`}>
                <CompHashtag
                  iconSrc={hash.icon}
                  choiced={curHash === hash.id}
                  onPress={() => {
                    setCurHash(hash.id);
                  }}>
                  {hash.name} {hash.count && hash.count > 0 ? hash.count : ''}
                </CompHashtag>
              </View>
            );
          })}
        </ScrollView>
      </View>

      {
        //검색바
        <View
          style={tw`${curHash === 'search' ? '' : 'h-0'} 
            overflow-hidden border-t border-g1`}>
          <CompSearchBar
            onSearch={keyword => {
              console.log(keyword);
            }}
          />
        </View>
      }
    </View>
  );
};

export default CompHashList;
