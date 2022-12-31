import React from 'react';
import {View} from 'react-native';
import tw from '../../libs/Lib_Tw';
import StarRate from '../common/Comp_StarRate';
import NotoText from '../common/Comp_NotoText';
import LikeEmoIcon from './Comp_LikeEmoIcon';

const CompStatCard = ({hospital}: {hospital: HospitalType}) => {
  const scoreType = {
    score_service_clarity: '청결함',
    score_service_kindness: '직원의 친절',
    score_treatment_explain: '자세한 설명',
    score_treatment_outcome: '치료후 결과',
  };

  return (
    <View style={tw`flex-row`}>
      {/* 세부 평가*/}
      <View style={tw`flex-1 justify-between p-2 bg-white border border-g3`}>
        {Object.keys(scoreType).map((key, idx) => {
          return (
            <React.Fragment key={idx}>
              <View style={tw`flex-1 p-1 flex-row-between`}>
                <NotoText style={tw`flex-1 text-black font-12`}>
                  {scoreType[key as keyof ScoreType]}
                </NotoText>
                <View style={tw`w-0 h-5 px-1 border-l border-g3`} />
                <View style={tw`flex-1`}>
                  <StarRate rate={hospital[key as keyof ScoreType]} />
                </View>
              </View>

              {idx !== Object.keys(scoreType).length - 1 && (
                <View style={tw`border-t border-g3`} />
              )}
            </React.Fragment>
          );
        })}
      </View>
      {/* 세부 평가 끝*/}
      {/* 평균 */}
      <View style={tw`flex-1 bg-g1  border border-l-0 border-g3`}>
        <View style={tw`flex-center`}>
          <NotoText style={tw`text-black font-12 pt-4 text-g3`}>
            별점 평균
          </NotoText>
          <View style={tw`flex-row p-6 items-end`}>
            <NotoText style={tw`font-bold font-40 text-black `}>
              {hospital.total_score.toFixed(1)}
            </NotoText>
            <NotoText style={tw`p-1 font-bold font-18 text-g6`}>/10</NotoText>
          </View>
        </View>
        <View style={tw`flex-row border-t border-g3`}>
          <LikeEmoIcon recommand style={tw`border-r border-g3`}>
            {hospital.suggest_cnt}
          </LikeEmoIcon>
          <LikeEmoIcon>{hospital.unsuggest_cnt}</LikeEmoIcon>
        </View>
      </View>

      {/* 평균 끝 */}
    </View>
  );
};

export default React.memo(CompStatCard);
