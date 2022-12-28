import React from 'react';
import {View} from 'react-native';
import tw from '../../libs/Lib_Tw';
import CompNotoText from '../common/Comp_NotoText';

const CompTreatment = ({treatments}: {treatments: TreatmentType[]}) => {
  if (treatments.length === 0) {
    return <></>;
  }
  return (
    <View style={tw`p-2 py-2 bg-g1`}>
      {treatments.map((treatment, idx) => (
        <React.Fragment key={idx}>
          <View style={tw`p-1 flex-row-between`}>
            <CompNotoText style={tw`font-13 font-bold text-g7`}>
              {treatment.name}
            </CompNotoText>
            <CompNotoText style={tw`font-13 text-g7`}>
              {`${parseInt(treatment.price, 10).toLocaleString('en-US')} 원`}
            </CompNotoText>
          </View>
          {idx !== treatments.length - 1 && (
            <View style={tw`m-1 h-0 border-b border-g3`} />
          )}
        </React.Fragment>
      ))}
    </View>
  );
};

export default CompTreatment;
