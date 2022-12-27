import React from 'react';
import {View, Text} from 'react-native';
import tw from '../../libs/Lib_Tw';
import CompStarRate from '../common/Comp_StarRate';
import CompNotoText from '../common/Comp_NotoText';
import CompRecomand from './Comp_Recomand';
const CompStatCard = ({hospital}: {hospital: hospitalType}) => {
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
                <CompNotoText style={tw`flex-1 text-black font-12`}>
                  {scoreType[key as keyof scoreType]}
                </CompNotoText>
                <View style={tw`w-0 h-5 px-1 border-l border-g3`} />
                <View style={tw`flex-1`}>
                  <CompStarRate rate={hospital[key as keyof scoreType]} />
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
      <View style={tw`flex-1 bg-g1 border-y border-r border-g3`}>
        <View style={tw`flex-center`}>
          <CompNotoText style={tw`text-black font-12 pt-4 text-g3`}>
            별점 평균
          </CompNotoText>
          <View style={tw`flex-row p-6 items-end`}>
            <CompNotoText style={tw`font-bold font-40 text-black `}>
              {hospital.total_score.toFixed(1)}
            </CompNotoText>
            <CompNotoText style={tw`p-1 font-bold font-18 text-g6`}>
              /10
            </CompNotoText>
          </View>
        </View>
        <View style={tw`flex-row border-t border-g3`}>
          <CompRecomand recommand style={tw`border-r border-g3`}>
            7
          </CompRecomand>
          <CompRecomand> 2</CompRecomand>
        </View>
      </View>

      {/* 평균 끝 */}
    </View>
  );
};

export default CompStatCard;
