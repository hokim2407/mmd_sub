import React from 'react';
import {View} from 'react-native';
import tw from '../../libs/Lib_Tw';
import StarRate from '../common/Comp_StarRate';
import NotoText from '../common/Comp_NotoText';
import {useAppSelector} from '../../context/store';
const CompStarCard = () => {
  const current = useAppSelector(state => state.current);
  const hospital = useAppSelector(
    state => state.hospitals.hospitals[current.hospitalIdx],
  );
  const scoreType = {
    score_treatment_outcome: '진료의 효과',
    score_service_kindness: '직원의 친절',
    score_treatment_explain: '자세한 설명',
    score_service_clarity: '청결함',
  };

  return (
    <View style={tw`flex-row bg-white`}>
      {/* 세부 평가*/}
      <View
        style={tw`flex-row-between flex-wrap  p-2 bg-white border border-g3`}>
        {Object.keys(scoreType).map((key, idx) => {
          return (
            <View key={idx} style={tw`w-[50%] p-1 flex-row-between`}>
              <NotoText style={tw`text-black font-12`}>
                {scoreType[key as keyof ScoreType]}
              </NotoText>
              <View style={tw`mr-2`}>
                <StarRate rate={hospital[key as keyof ScoreType]} />
              </View>
            </View>
          );
        })}
      </View>
      {/* 세부 평가 끝*/}
    </View>
  );
};

export default React.memo(CompStarCard);
