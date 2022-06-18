import { SET_USER_INFO } from "../constants/constants";

export const setUserInforAction = (user) => {
  return {
    type: SET_USER_INFO,
    payload: user,
  };
};
