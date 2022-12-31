import {GetReviewList} from '../apis/API_Reviews';

import {AppDispatch} from '../context/Store';
import {setCurKeyword} from '../context/Slice_Current';
import {setEndReviews, setReviews} from '../context/Slice_Reviews';

const ReadReviews = async (
  dispatch: AppDispatch,
  hospital: HospitalType,
  reviewPage: number,
  keyword: string,
) => {
  dispatch(setCurKeyword(keyword));
  const reviewList = await GetReviewList(hospital.id, reviewPage, keyword);
  if (reviewList.success) {
    if (reviewList.result.reviews.length === 0) {
      dispatch(setEndReviews({hospitalIdx: hospital.idx, keyword: keyword}));
      return;
    }
    dispatch(
      setReviews({
        hospitalIdx: hospital.idx,
        keyword: keyword,
        page: reviewPage,
        reviews: reviewList.result.reviews,
      }),
    );
  }
};

export {ReadReviews};
