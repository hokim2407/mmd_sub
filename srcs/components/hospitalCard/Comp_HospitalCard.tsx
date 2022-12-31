import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import tw from '../../libs/Lib_Tw';
import NotoText from '../common/Comp_NotoText';
import StarRate from '../common/Comp_StarRate';

const HospitalCard = ({
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
        <NotoText style={tw`text-base font-14 mb-1`}>{name}</NotoText>
        <StarRate rate={rate} showRate={true} />
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(HospitalCard);
