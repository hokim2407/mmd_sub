import React from 'react';
import {useAppDispatch, useAppSelector} from '../../context/store';
import {updateLiked} from '../../context/Slice_hospitals';
import {setCurReview} from '../../context/Slice_current';

type ReviewContextType = {
  review: ReviewType;
  updateLike: () => void;
  redirectDetail: () => void;
};

const ReviewContext = React.createContext<ReviewContextType | undefined>(
  undefined,
);

function ReviewProvider({
  children,
  review,
  navigation,
}: {
  children: React.ReactNode;
  review: ReviewType;
  navigation: NavProps;
}) {
  const {hospitalIdx} = useAppSelector(state => state.current);
  const dispatch = useAppDispatch();

  const redirectDetail = () => {
    dispatch(setCurReview(review.idx));
    navigation.push('ReviewDetail');
  };

  const updateLike = () => {
    dispatch(updateLiked({hospitalIdx, reviewIdx: review.idx}));
  };

  return (
    <ReviewContext.Provider value={{review, updateLike, redirectDetail}}>
      {children}
    </ReviewContext.Provider>
  );
}

function useReviewContext() {
  const context = React.useContext(ReviewContext);
  if (context === undefined) {
    throw new Error('useReviewContext must be used within a ReviewProvider');
  }
  return context;
}

export {ReviewProvider, useReviewContext};
