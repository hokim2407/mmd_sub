import React, {useState, useEffect} from 'react';
import {View, ScrollView, LayoutAnimation} from 'react-native';
import tw from '../../libs/Lib_Tw';
import SearchIcon from '../../assets/images/Search.png';
import Hashtag from './Comp_Hashtag';
import SearchBar from './Comp_SearchBar';
import {ReadReviews} from '../../libs/Lib_ReadReviews';
import {useAppDispatch, useAppSelector} from '../../context/Store';
import {setCurKeyword} from '../../context/Slice_Current';

const HashListCard = ({hashList}: {hashList: TreatmentPerNameType[]}) => {
  const dispatch = useAppDispatch();
  const current = useAppSelector(store => store.current);
  const hospital = useAppSelector(
    store => store.hospitals.hospitals[current.hospitalIdx],
  );
  const reviewPages = useAppSelector(
    state => state.reviews[current.hospitalIdx]?.pages,
  );

  const hashs: HashType[] = [
    {id: 'all', name: '전체'},
    {id: 'search', name: '검색', icon: SearchIcon},
    ...hashList.map((hash, idx) => {
      return {id: idx, ...hash};
    }),
  ];

  const [curHash, setCurHash] = useState(hashs[0].id);

  useEffect(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }, [curHash]);

  const onPress = (hash: HashType) => {
    return async () => {
      setCurHash(hash.id);
      if (hash.id === 'search') {
        return;
      }
      const keyword = hash.name === '전체' ? '' : hash.name;
      dispatch(setCurKeyword(keyword));
      if (reviewPages?.[keyword]) {
        return;
      }
      await ReadReviews(dispatch, hospital, 1, keyword);
    };
  };

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
                  onPress={onPress(hash)}>
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
