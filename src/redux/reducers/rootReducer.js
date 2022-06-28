import { combineReducers } from "redux";
import { spinnerComponentReducer } from "./spinnerComponentReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  userReducer: userReducer,
  spinnerComponentReducer: spinnerComponentReducer,
});
