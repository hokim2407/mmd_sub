import {configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {hospitalsReducer} from './Slice_hospitals';
import {currentReducer} from './Slice_current';
import {reviewsReducer} from './Slice_reviews';
const store = configureStore({
  reducer: {
    hospitals: hospitalsReducer,
    reviews: reviewsReducer,
    current: currentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const useAppDispatch: () => AppDispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export {store, useAppDispatch, useAppSelector};
