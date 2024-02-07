import { createStore, combineReducers } from 'redux';
// import subjectReducer from './reducers/subjectReducer';
// import gptReducer from './reducers/gptReducer';

const rootReducer = combineReducers({
  // subject: subjectReducer,
  // gpt: gptReducer,
});

const store = createStore(rootReducer);

export default store;
