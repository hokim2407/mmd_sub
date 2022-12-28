import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import tw from '../../libs/Lib_Tw';
import CompIconImage from '../common/Comp_IconImage';
import SearchIcon from '../../assets/images/Search.png';
import CancelIcon from '../../assets/images/Cancel.png';
import {color} from '../../configs/Conf_Style';
const CompSearchBar = ({onSearch}: {onSearch: (keyword: string) => void}) => {
  const [keyword, setKeyword] = useState('');

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
          <CompIconImage
            src={CancelIcon}
            style={tw`width-18 height-18`}
            onPress={() => {
              setKeyword('');
            }}
          />
          <CompIconImage
            src={SearchIcon}
            color={color.p5}
            style={{width: 22, height: 22}}
            onPress={() => {
              onSearch(keyword);
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default React.memo(CompSearchBar);
