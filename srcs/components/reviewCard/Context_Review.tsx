import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../context/store';
import {setCurReview} from '../../context/Slice_current';
import {updateLiked} from '../../context/Slice_reviews';

type ReviewContextType = {
  review: ReviewType;
  updateLike: () => void;
  redirectDetail: () => void;
};

const ReviewContext = React.createContext<ReviewContextType | undefined>(
  undefined,
);

const ReviewProvider = React.memo(
  ({
    children,
    review,
    reviewIdx,
    navigation,
  }: {
    children: React.ReactNode;
    review: ReviewType;
    reviewIdx: number;
    navigation: NavProps;
  }) => {
    const {hospitalIdx} = useAppSelector(state => state.current);
    const dispatch = useAppDispatch();

    const redirectDetail = () => {
      dispatch(setCurReview(reviewIdx));
      navigation.push('ReviewDetail');
    };

    const updateLike = () => {
      dispatch(updateLiked({hospitalIdx, reviewId: review.id}));
    };

    return (
      <ReviewContext.Provider value={{review, updateLike, redirectDetail}}>
        {children}
      </ReviewContext.Provider>
    );
  },
);

function useReviewContext() {
  const context = React.useContext(ReviewContext);
  if (context === undefined) {
    throw new Error('useReviewContext must be used within a ReviewProvider');
  }
  return context;
}
export {ReviewProvider, useReviewContext};
