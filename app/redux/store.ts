import { configureStore } from '@reduxjs/toolkit';
import subjectReducer from './reducers/subjectReducers';

const store = configureStore({
  reducer: {
    subject: subjectReducer,

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
