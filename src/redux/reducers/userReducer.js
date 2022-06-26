import { localStorageService } from "../../services/localStorageService";
import { SET_USER_INFO } from "../constants/constants";

let initialState = {
  userInfor: localStorageService.getUserInfor(),
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFO: {
      state.userInfor = action.payload;
      localStorageService.setUserInfo(action.payload);
    }
    default:
      return state;
  }
};
