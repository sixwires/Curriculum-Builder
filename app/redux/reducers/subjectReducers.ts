import { createReducer } from '@reduxjs/toolkit';
import { setSubject } from '../actions/subjectActions';

interface SubjectState {
  subject: string;
}

const initialState: SubjectState = {
  subject: '',
};

const subjectReducer = createReducer(initialState, (builder) => {
  builder.addCase(setSubject, (state, action) => {
    state.subject = action.payload;
  });
});

export default subjectReducer;
