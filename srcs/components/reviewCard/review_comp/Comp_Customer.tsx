import React from 'react';
import {View, StyleProp, ViewStyle} from 'react-native';
import tw from '../../../libs/Lib_Tw';
import NotoText from '../../common/Comp_NotoText';
import IconText from '../../common/Comp_IconText';
import EditIcon from '../../../assets/images/Edit.png';
import LikeIcon from '../../../assets/images/Like_Full.png';
import {useReviewContext} from '../Context_Review';

const CompCustomer = ({
  nameStyle,
  style,
}: {
  nameStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
}) => {
  const {review} = useReviewContext();
  return (
    <View style={[tw`flex-col`, style]}>
      <NotoText style={[tw`text-g7 font-12 font-bold`, nameStyle]}>
        {review.customer.nickname}
      </NotoText>
      <View style={tw`flex-row-start`}>
        <IconText imageSrc={EditIcon} containerStyle={tw`mr-1`}>
          {review.customer.review_cnt}
        </IconText>
        <IconText imageSrc={LikeIcon}>{review.customer.liked_cnt}</IconText>
        <View style={tw`bg-black w-0 height-12 border-l border-g3 m-1 mr-2`} />
        <NotoText style={tw`text-g6 font-12`}>
          {review.registered_at.split('T')[0]} 리뷰 등록
        </NotoText>
      </View>
    </View>
  );
};

export default React.memo(CompCustomer);
