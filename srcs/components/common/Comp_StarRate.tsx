import React from 'react';
import {View} from 'react-native';
import tw from '../../libs/Lib_Tw';
import CompIconImage from './Comp_IconImage';
import CompNotoText from './Comp_NotoText';

import Star_Full from '../../assets/images/Star_Full.png';
import Star_Half from '../../assets/images/Star_Half.png';
import Star_Empty from '../../assets/images/Star_Empty.png';

const CompStarRate = ({
  rate,
  fullRate = 10,
  starCount = 5,
  showRate = false,
}: {
  rate: number;
  fullRate?: number;
  starCount?: number;
  showRate?: boolean;
}) => {
  const getStarImage = (idx: number) => {
    const calcRate = (rate * starCount) / fullRate;
    if (calcRate >= idx + 1) {
      return Star_Full;
    }
    if (idx + 1 - calcRate < 1) {
      return Star_Half;
    }
    return Star_Empty;
  };

  return (
    <View style={tw`flex-row-start`}>
      {[...Array(starCount).keys()].map(idx => (
        <CompIconImage
          key={idx}
          style={tw`width-16 height-16`}
          src={getStarImage(idx)}
        />
      ))}
      {showRate && (
        <CompNotoText style={tw`pt-[2] pl-1 font-bold text-g7 font-14`}>
          {rate}
        </CompNotoText>
      )}
    </View>
  );
};

export default CompStarRate;
