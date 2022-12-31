import React from 'react';
import {View} from 'react-native';
import tw from '../../../libs/Lib_Tw';
import NotoText from '../../common/Comp_NotoText';
import {useReviewContext} from '../Context_Review';

const Treatment = () => {
  const {review} = useReviewContext();
  if (review.treatment_prices.length === 0) {
    return <></>;
  }
  return (
    <View style={tw`p-2 py-2 bg-g1`}>
      {review.treatment_prices.map((treatment, idx) => (
        <React.Fragment key={idx}>
          <View style={tw`p-1 flex-row-between`}>
            <NotoText style={tw`font-13 font-bold text-g7`}>
              {treatment.name}
            </NotoText>
            <NotoText style={tw`font-13 text-g7`}>
              {`${parseInt(treatment.price, 10).toLocaleString('en-US')} 원`}
            </NotoText>
          </View>
          {idx !== review.treatment_prices.length - 1 && (
            <View style={tw`m-1 h-0 border-b border-g3`} />
          )}
        </React.Fragment>
      ))}
    </View>
  );
};

export default React.memo(Treatment);
