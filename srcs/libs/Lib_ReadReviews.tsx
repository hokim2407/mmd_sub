import {GetReviewList} from '../apis/API_Reviews';
import {AppDispatch} from '../context/Store';
import {setCurKeyword} from '../context/Slice_Current';
import {setEndReviews, setReviews} from '../context/Slice_Reviews';
import {updateHospitalSuggestInfo} from '../context/Slice_Hospitals';
import {MAX_SIZE} from '@env';

const ReadReviews = async (
  dispatch: AppDispatch,
  hospital: HospitalType,
  reviewPage: number,
  keyword: string,
) => {
  dispatch(setCurKeyword(keyword));
  let readSuggest;
  if (!hospital.suggest_cnt) {
    readSuggest = ReadReviewsSuggetCnt(dispatch, hospital, keyword);
  }
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

  if (readSuggest) {
    await readSuggest;
  }
};

const ReadReviewsSuggetCnt = async (
  dispatch: AppDispatch,
  hospital: HospitalType,
  keyword: string,
) => {
  try {
    const reviewList = await GetReviewList(hospital.id, 1, keyword, MAX_SIZE);
    if (reviewList.success) {
      const suggest_cnt = reviewList.result.reviews.filter(
        (review: ReviewType) => review.suggest,
      ).length;

      dispatch(
        updateHospitalSuggestInfo({
          idx: hospital.idx,
          suggest_cnt,
          unsuggest_cnt: reviewList.result.reviews.length - suggest_cnt,
        }),
      );
    }
  } catch (e) {
    console.log(e);
  }
};

export {ReadReviews, ReadReviewsSuggetCnt};
