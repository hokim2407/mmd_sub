import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from './store';

const initialState: {
  [hospitalIdx: string]: {
    reviews: {[reviewId: string]: ReviewType};
    pages: {
      [keyword: string]: {
        page: number;
        page_end: boolean;
        reviewIds: number[];
      };
    };
  };
} = {};

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: initialState,
  reducers: {
    // 리뷰 리스트 셋업
    setReviews: (
      state,
      action: PayloadAction<{
        hospitalIdx: number;
        keyword: string;
        page: number;
        reviews: ReviewType[];
      }>,
    ) => {
      const hospitalIdx = action.payload.hospitalIdx;
      const keyword = action.payload.keyword;
      const reviews = action.payload.reviews;
      const page = action.payload.page;

      // 초기화
      if (!state[hospitalIdx]) {
        state[hospitalIdx] = {reviews: {}, pages: {}};
      }
      if (!state[hospitalIdx].pages[keyword]) {
        state[hospitalIdx].pages[keyword] = {
          page: 0,
          page_end: false,
          reviewIds: [],
        };
      }

      reviews.map(review => {
        if (!state[hospitalIdx].reviews[review.id]) {
          state[hospitalIdx].reviews[review.id] = review;
        }
        state[hospitalIdx].pages[keyword].reviewIds.push(review.id);
      });
      state[hospitalIdx].pages[keyword].page = page;
    },

    // 리뷰 리스트 모두 불러옴
    setEndReviews: (
      state,
      action: PayloadAction<{
        hospitalIdx: number;
        keyword: string;
      }>,
    ) => {
      const hospitalIdx = action.payload.hospitalIdx;
      const keyword = action.payload.keyword;
      state[hospitalIdx].pages[keyword].page_end = true;
    },

    // 도움됐어요 클릭
    updateLiked: (
      state,
      action: PayloadAction<{hospitalIdx: number; reviewId: number}>,
    ) => {
      const h_idx = action.payload.hospitalIdx;
      const v_id = action.payload.reviewId;
      const prevLiked = state[h_idx].reviews[v_id].already_liked;
      state[h_idx].reviews[v_id].liked_cnt += prevLiked ? -1 : 1;
      state[h_idx].reviews[v_id].already_liked =
        !state[h_idx].reviews[v_id].already_liked;
    },
  },
});

const {setReviews, setEndReviews, updateLiked} = reviewsSlice.actions;
const reviewsReducer = reviewsSlice.reducer;
const reviews = (state: RootState) => state.reviews;

export {setReviews, setEndReviews, updateLiked, reviewsReducer, reviews};
