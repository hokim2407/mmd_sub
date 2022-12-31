import React, {useState, useEffect} from 'react';
import {View, ScrollView, LayoutAnimation} from 'react-native';
import tw from '../../libs/Lib_Tw';
import SearchIcon from '../../assets/images/Search.png';
import Hashtag from './Comp_Hashtag';
import SearchBar from './Comp_SearchBar';
import {Search} from '../../libs/Lib_Search';
import {useAppDispatch, useAppSelector} from '../../context/store';

const HashListCard = ({hashList}: {hashList: TreatmentPerNameType[]}) => {
  const dispatch = useAppDispatch();
  const currnet = useAppSelector(store => store.current);
  const hospital = useAppSelector(
    store => store.hospitals.hospitals[currnet.hospitalIdx],
  );
  const hashs: HashType[] = [
    {id: 'all', name: '전체', keywords: ''},
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
        {/* 해시태그 스크롤 */}
        <ScrollView
          contentContainerStyle={tw`grow`}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {hashs.map(hash => {
            return (
              <View key={hash.id} style={tw`mx-1`}>
                <Hashtag
                  iconSrc={hash.icon}
                  choiced={curHash === hash.id}
                  onPress={() => {
                    setCurHash(hash.id);
                    if (hash.id === 'search') {
                      return;
                    }
                    if (hash.id === '전체') {
                      return Search(dispatch, hospital, '');
                    }
                    Search(dispatch, hospital, hash.name);
                  }}>
                  {hash.name} {hash.count && hash.count}
                </Hashtag>
              </View>
            );
          })}
        </ScrollView>
      </View>

      {/* 검색바 */}
      <View
        style={tw`${curHash === 'search' ? '' : 'h-0'} 
            overflow-hidden border-t border-g1`}>
        <SearchBar />
      </View>
    </View>
  );
};

export default React.memo(HashListCard);
