import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../context/Store';
import {setCurReview} from '../../context/Slice_Current';
import {updateLiked} from '../../context/Slice_Reviews';

type ReviewContextType = {
  review: ReviewType;
  updateLike: (setReviewIdx?: number) => void;
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
    const current = useAppSelector(state => state.current);
    const reviewPages = useAppSelector(
      state => state.reviews[current.hospitalIdx].pages[current.keyword],
    );
    const dispatch = useAppDispatch();

    const redirectDetail = () => {
      dispatch(setCurReview(reviewIdx));
      navigation.push('ReviewDetail');
    };

    const updateLike = (setReviewIdx: number | undefined) => {
      dispatch(
        updateLiked({
          hospitalIdx: current.hospitalIdx,
          reviewId: setReviewIdx
            ? reviewPages.reviewIds[setReviewIdx]
            : review.id,
        }),
      );
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
