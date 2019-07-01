import { combineReducers } from 'redux';

import QuestionReducer from './QuestionReducer' 
import AuthReducer from './AuthReducer' 

const rootReducer = combineReducers({
    question : QuestionReducer,
    auth : AuthReducer,
  });

  export default rootReducer;
