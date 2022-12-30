import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from './store';

const initialState: {hospitals: HospitalType[]} = {hospitals: []};

const hospitalsSlice = createSlice({
  name: 'hospitals',
  initialState: initialState,
  reducers: {
    // 병원 리스트 셋업
    setHospitals: (state, action: PayloadAction<HospitalType[]>) => {
      const originIdx = state.hospitals.length;

      state.hospitals = state.hospitals.concat(
        action.payload.map((hospital, idx) => {
          hospital.idx = originIdx + idx;
          hospital.review_page = 1;
          hospital.reviews = [];
          return hospital;
        }),
      );
    },
    // 리뷰리스트 업데이트
    updateReviewPage: (
      state,
      action: PayloadAction<{
        idx: number;
        reviews: ReviewType[];
      }>,
    ) => {
      const h_idx = action.payload.idx;
      state.hospitals[h_idx].review_page += 1;
      const originalIdx = state.hospitals[h_idx].reviews.length;
      action.payload.reviews.map((review, idx) => {
        review.idx = originalIdx + idx;
        state.hospitals[h_idx].reviews.push(review);
      });
    },
    updateHospitalSuggestInfo: (
      state,
      action: PayloadAction<{
        idx: number;
        suggest_cnt: number;
        unsuggest_cnt: number;
      }>,
    ) => {
      state.hospitals[action.payload.idx].suggest_cnt =
        action.payload.suggest_cnt;
      state.hospitals[action.payload.idx].unsuggest_cnt =
        action.payload.unsuggest_cnt;
    },
    // 도움됐어요 클릭
    updateLiked: (
      state,
      action: PayloadAction<{hospitalIdx: number; reviewIdx: number}>,
    ) => {
      const h_idx = action.payload.hospitalIdx;
      const v_idx = action.payload.reviewIdx;
      const prevLiked = state.hospitals[h_idx].reviews[v_idx].already_liked;
      state.hospitals[h_idx].reviews[v_idx].liked_cnt += prevLiked ? -1 : 1;
      state.hospitals[h_idx].reviews[v_idx].already_liked =
        !state.hospitals[h_idx].reviews[v_idx].already_liked;
    },
  },
});

const {setHospitals, updateHospitalSuggestInfo, updateReviewPage, updateLiked} =
  hospitalsSlice.actions;
const hospitalsReducer = hospitalsSlice.reducer;
const hospitals = (state: RootState) => state.hospitals.hospitals;

export {
  setHospitals,
  updateHospitalSuggestInfo,
  updateLiked,
  updateReviewPage,
  hospitalsReducer,
  hospitals,
};
