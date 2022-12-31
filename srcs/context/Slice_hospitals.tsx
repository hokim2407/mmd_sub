import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from './Store';

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
          return hospital;
        }),
      );
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
  },
});

const {setHospitals, updateHospitalSuggestInfo} = hospitalsSlice.actions;
const hospitalsReducer = hospitalsSlice.reducer;
const hospitals = (state: RootState) => state.hospitals.hospitals;

export {setHospitals, updateHospitalSuggestInfo, hospitalsReducer, hospitals};
