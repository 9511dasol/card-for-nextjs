import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  // 다른 리듀서들도 여기에 추가할 수 있습니다.
});

export default rootReducer;