import React from 'react';
import tw from '../../libs/Lib_Tw';
import FoldableText from '../common/Comp_FoldableText';
import Treatment from './review_comp/Comp_Treatment';
import ReviewHeader from './review_comp/Comp_ReviewHeader';
import {useReviewContext} from './Context_Review';

const CompReviewCard = ({foldable = true}: {foldable?: boolean}) => {
  const {review} = useReviewContext();

  return (
    <>
      {/* 헤더 시작 */}
      <ReviewHeader />
      {/* 헤더 끝 */}

      {/* 리뷰내용 시작 */}
      <FoldableText
        foldable={foldable}
        textStyle={tw`mb-4`}
        text={review.contents}
      />
      {/* 리뷰내용 끝 */}

      {/* 치료내역 시작 */}
      <Treatment />
      {/* 치료내역 끝 */}
    </>
  );
};

export default React.memo(CompReviewCard);
