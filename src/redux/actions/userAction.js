import { message } from "antd";
import { userService } from "../../services/userService";
import { SET_USER_INFO } from "../constants/constants";

export const setUserInforAction = (user) => {
  return {
    type: SET_USER_INFO,
    payload: user,
  };
};

// let handleLoginSuccess = () => {};

// let handleLoginFail = () => {};

export const setUserInforActionService = (
  dataLogin,
  handleSuccess = () => {},
  handleFail = () => {}
) => {
  return (dispatch) => {
    userService
      .postLogin(dataLogin)
      .then((res) => {
        handleSuccess();
        console.log(res);
        dispatch({
          type: SET_USER_INFO,
          payload: res.data.content,
        });
      })
      .catch((err) => {
        console.log(err);
        handleFail();
      });
  };
};

export const setUserRegisterActionService = (
  dataRegister,
  handleSuccess = () => {},
  handleFail = () => {}
) => {
  return (dispatch) => {
    userService
      .postRegister(dataRegister)
      .then((res) => {
        handleSuccess();
        console.log("postRegister", res);
        dispatch({
          type: SET_USER_INFO,
          payload: res.data.content,
        });
      })
      .catch((err) => {
        console.log(err.response.data.content);
        message.warning(err.response.data.content);
      });
  };
};
