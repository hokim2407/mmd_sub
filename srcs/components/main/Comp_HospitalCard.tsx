import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import tw from '../../libs/Lib_Tw';
import CompNotoText from '../common/Comp_NotoText';
import CompStarRate from '../common/Comp_StarRate';

const CompHospitalCard = ({
  name,
  rate,
  onPress,
}: {
  name: string;
  rate: number;
  onPress?: () => void;
}) => {
  return (
    <TouchableOpacity
      style={tw`flex-row p-3 bg-white w-[100%]`}
      activeOpacity={0.5}
      onPress={onPress}>
      <View style={tw`flex-1`}>
        <CompNotoText style={tw`text-base font-14 mb-1`}>{name}</CompNotoText>
        <CompStarRate rate={rate} showRate={true} />
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(CompHospitalCard);
