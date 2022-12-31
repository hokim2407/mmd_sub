import React from 'react';
import tw from '../../libs/Lib_Tw';
import {View} from 'react-native';
import Comp_IconImage from '../common/Comp_IconImage';
import CompCustomer from './review_comp/Comp_Customer';
import LikeButton from './review_comp/Comp_LikeButton';
import {useReviewContext} from './Context_Review';

const ReviewProfileCard = ({showButton = true}: {showButton?: boolean}) => {
  const {review} = useReviewContext();
  const imageStyle = showButton
    ? {
        width: 25,
        height: 25,
        marginBottom: 20,
        marginRight: 5,
        padding: 3,
      }
    : {
        width: 40,
        height: 40,
        padding: 5,
      };

  return (
    <View style={tw`flex-row-between bg-white`}>
      <Comp_IconImage
        style={[tw`border rounded-full border-g3`, imageStyle]}
        src={{uri: review.customer.profile_image}}
      />
      <CompCustomer style={tw`w-[${showButton ? 60 : 85}%]`} />
      {showButton && <LikeButton mode={'light'} />}
    </View>
  );
};

export default React.memo(ReviewProfileCard);
