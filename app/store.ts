// redux/store.ts

import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import curriculumReducer from './generate/features/curriculum/curriculumSlice';

const store = configureStore({
  reducer: {
    curriculum: curriculumReducer,
    // Add other reducers here if needed
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
