import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from './store';

const initialState: {hospitalIdx: number; reviewIdx: number} = {
  hospitalIdx: 0,
  reviewIdx: 0,
};

const currentSlice = createSlice({
  name: 'current',
  initialState: initialState,
  reducers: {
    // 병원 idx 설정
    setCurHospital: (state, action: PayloadAction<number>) => {
      state.hospitalIdx = action.payload;
    },
    // 리뷰 idx 설정
    setCurReview: (state, action: PayloadAction<number>) => {
      state.reviewIdx = action.payload;
    },
    // 리뷰 idx  ++
    increaseCurReview: state => {
      state.reviewIdx += 1;
    },
    // 리뷰 idx  --
    decreaseCurReview: state => {
      state.reviewIdx -= 1;
    },
  },
});

const {setCurHospital, setCurReview, increaseCurReview, decreaseCurReview} =
  currentSlice.actions;
const currentReducer = currentSlice.reducer;
const current = (state: RootState) => state.current;

export {
  setCurHospital,
  setCurReview,
  increaseCurReview,
  decreaseCurReview,
  currentReducer,
  current,
};
