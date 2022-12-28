import React from 'react';
import {View, StyleProp, ViewStyle} from 'react-native';
import tw from '../../libs/Lib_Tw';
import CompNotoText from '../common/Comp_NotoText';
import CompIconText from '../common/Comp_IconText';
import EditIcon from '../../assets/images/Edit.png';
import LikeIcon from '../../assets/images/Like_Full.png';

const CompCustomer = ({
  customer,
  registered_at,
  nameStyle,
}: {
  customer: CustomerType;
  registered_at: string;
  nameStyle?: StyleProp<ViewStyle>;
}) => {
  return (
    <>
      <CompNotoText style={[tw`text-g7 font-12 font-bold`, nameStyle]}>
        {customer.nickname}
      </CompNotoText>
      <View style={tw`flex-row-start`}>
        <CompIconText imageSrc={EditIcon} containerStyle={tw`mr-1`}>
          {customer.review_cnt}
        </CompIconText>
        <CompIconText imageSrc={LikeIcon}>{customer.liked_cnt}</CompIconText>
        <View style={tw`bg-black w-0 height-12 border-l border-g3 m-1 mr-2`} />
        <CompNotoText style={tw`text-g6 font-12`}>
          {registered_at} 등록
        </CompNotoText>
      </View>
    </>
  );
};

export default CompCustomer;
