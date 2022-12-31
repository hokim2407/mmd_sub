import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import tw from '../../libs/Lib_Tw';
import IconImage from '../common/Comp_IconImage';
import SearchIcon from '../../assets/images/Search.png';
import CancelIcon from '../../assets/images/Cancel.png';
import {color} from '../../configs/Conf_Style';
import {useAppSelector, useAppDispatch} from '../../context/store';
import {ReadReviews} from '../../libs/Lib_ReadReviews';

const SearchBar = () => {
  const dispatch = useAppDispatch();
  const current = useAppSelector(state => state.current);
  const hospital = useAppSelector(
    state => state.hospitals.hospitals[current.hospitalIdx],
  );
  const reviewPages = useAppSelector(
    state => state.reviews[current.hospitalIdx]?.pages,
  );
  const [keyword, setKeyword] = useState(current.keyword);

  return (
    <View style={[tw`bg-white py-3 px-4`]}>
      <View
        style={tw`pl-4 pr-2 py-1 flex-row items-center justify-between border border-p5 rounded-lg  overflow-hidden`}>
        <TextInput
          cursorColor={color.s4}
          underlineColorAndroid="transparent"
          placeholder="검색하고 싶은 검색어를 입력해주세요."
          onChangeText={setKeyword}
          value={keyword}
          style={tw`w-[82%] h-8 p-0 font-14 noto-400`}
        />
        <View style={tw`w-[18%] flex-row-between`}>
          <IconImage
            src={CancelIcon}
            style={tw`width-18 height-18`}
            onPress={() => {
              setKeyword('');
            }}
          />
          <IconImage
            src={SearchIcon}
            color={color.p5}
            style={{width: 22, height: 22}}
            onPress={async () => {
              let page = 1;
              if (reviewPages?.[keyword]) {
                page = reviewPages[keyword].page + 1;
              }
              await ReadReviews(dispatch, hospital, page, keyword);
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default React.memo(SearchBar);
