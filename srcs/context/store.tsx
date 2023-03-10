import {configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {hospitalsReducer} from './Slice_Hospitals';
import {currentReducer} from './Slice_Current';
import {reviewsReducer} from './Slice_Reviews';
import {bottomSheetReducer} from './Slice_BottomSheet';
const store = configureStore({
  reducer: {
    hospitals: hospitalsReducer,
    reviews: reviewsReducer,
    current: currentReducer,
    bottomSheet: bottomSheetReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const useAppDispatch: () => AppDispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export {store, useAppDispatch, useAppSelector};
