import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from './Store';

const initialState: {
  open: boolean;
  currentIdx: number;
  items: {id: string; name: string}[];
} = {
  open: false,
  currentIdx: 0,
  items: [],
};

const bottomSheetSlice = createSlice({
  name: 'bottomSheet',
  initialState: initialState,
  reducers: {
    setupSheet: (
      state,
      action: PayloadAction<{
        items: {id: string; name: string}[];
        currentIdx?: number;
      }>,
    ) => {
      state.items = action.payload.items;
      if (action.payload.currentIdx)
        state.currentIdx = action.payload.currentIdx;
    },
    openSheet: state => {
      state.open = true;
    },
    setSheetIdx: (state, action: PayloadAction<number>) => {
      state.currentIdx = action.payload;
    },
    closeSheet: state => {
      state.open = false;
    },
  },
});

const {setupSheet, openSheet, closeSheet, setSheetIdx} =
  bottomSheetSlice.actions;
const bottomSheetReducer = bottomSheetSlice.reducer;
const bottomSheet = (state: RootState) => state.bottomSheet;

export {
  setupSheet,
  openSheet,
  closeSheet,
  setSheetIdx,
  bottomSheetReducer,
  bottomSheet,
};
